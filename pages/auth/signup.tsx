import AuthForm from "@components/AuthForm";
import { useState } from "react";
import type { NextPage } from "next";
import Router from "next/router";
import { FormikHelpers } from "formik";
import { userSignUpSchema, withPageNoAuth } from "@lib/auth";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const getServerSideProps = withPageNoAuth();

async function createUser(username: string, email: string, password: string) {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		body: JSON.stringify({ username, email, password }),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Something went wrong!");
	}

	return data;
}

type ISignUpValues = {
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
};

const SignUp: NextPage = () => {
	const [error, setError] = useState("");

	const validationSchema = userSignUpSchema.concat(Yup.object({
		passwordConfirmation: Yup.string()
			.required("Required")
			.oneOf([Yup.ref("password")], "Passwords must match"),
	}));

	const initialValues = {
		username: "",
		email: "",
		password: "",
		passwordConfirmation: "",
	};

	async function handleSubmit(
		values: ISignUpValues,
		{ setSubmitting }: FormikHelpers<ISignUpValues>
	) {
        setError("");

		try {
			await createUser(values.username, values.email, values.password);
            Router.push("/");
		} catch (error) {
            const { message } = error as any;
            if(message !== undefined)
			    setError(message); 
            else
                setError("There was a problem creating your account. Please try again");
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<AuthForm
			isLogin={false}
			validationSchema={validationSchema}
			initialValues={initialValues}
			handleSubmit={handleSubmit}
			error={error}
		/>
	);
};

export default SignUp;
