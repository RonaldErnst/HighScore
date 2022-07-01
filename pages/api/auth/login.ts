import {
	saveUserSession,
	userLoginSchema,
	verifyPassword,
	withApiNoAuth,
} from "@lib/auth";
import { connectToDatabase, IUser, UserModel } from "@lib/db";
import { HydratedDocument } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from "yup";

interface ICredentials {
	username: string;
	password: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const data = req.body;

	const { username, password }: ICredentials = data;

	try {
		userLoginSchema.validate({
			username,
			password,
		});
	} catch (error) {
		if (error instanceof Yup.ValidationError)
			res.status(401).json({ message: error.message });
		else
			res.status(401).json({
				message: "An error occured while validating your credentials",
			});
		return;
	}

	const dbClient = await connectToDatabase();
	try {
		const user: HydratedDocument<IUser> | null = await UserModel.findOne({
			username: username,
		});

		if (user === null) {
			res.status(401).json({ message: "Wrong user or password!" });
			return;
		}

		const isValid = await verifyPassword(password, user.password);

		if (!isValid) {
			res.status(401).json({ message: "Wrong user or password!" });
			return;
		}

        user.lastOnline = new Date();
        await user.save();

		const sessionUser = await saveUserSession(req.session, user);

		res.status(201).json({
			message: "User succesfully logged in",
			user: sessionUser,
		});
	} finally {
		await dbClient.connection.close();
	}
}

export default withApiNoAuth(handler);
