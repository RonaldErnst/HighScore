import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase, UserModel, IUser } from "@lib/db";
import {
	hashPassword,
	saveUserSession,
	userSignUpSchema,
	withApiNoAuth,
} from "@lib/auth";
import * as Yup from "yup";
import { HydratedDocument } from "mongoose";

interface ICredentials {
	username: string;
	email: string;
	password: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") return;

	const dbClient = await connectToDatabase();
	try {
		const data = req.body;

		const { username, email, password }: ICredentials = data;

		try {
			userSignUpSchema.validate({
				username,
				email,
				password,
			});
		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				res.status(422).json({ message: error.message });
			} else {
				res.status(422).json({
					message:
						"An error occured while validating your credentials",
				});
			}
		}

		const existingUser = await UserModel.findOne({ username: username });

		if (existingUser) {
			res.status(422).json({ message: "User exists already!" });
			return;
		}

		const hashedPassword = await hashPassword(password);

		const newUser: HydratedDocument<IUser> = await new UserModel({
			username: username,
			email: email,
			password: hashedPassword,
			createDate: new Date(),
			lastOnline: new Date(),
			role: "User",
		});

		await newUser.save();

		// Save session
		await saveUserSession(req.session, newUser);
		res.status(201).json({ message: "Created user!", user: newUser });
	} finally {
		dbClient.connection.close();
	}
}

export default withApiNoAuth(handler);
