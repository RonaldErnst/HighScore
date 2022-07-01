import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import AuthForm from "@components/AuthForm";
import { useState } from "react";
import { withPageNoAuth } from "@lib/auth";

export const getServerSideProps = withPageNoAuth();

type ILoginValues = {
	username: string;
	password: string;
};

const Login: NextPage = () => {
	const [error, setError] = useState("");
	const router = useRouter();

	const validationSchema = Yup.object({
		username: Yup.string().required("Required"),
		password: Yup.string().required("Required"),
	});

	const initialValues = {
		username: "",
		password: "",
	};

	async function handleSubmit(
		values: ILoginValues,
		{ setSubmitting }: FormikHelpers<ILoginValues>
	) {
		setError("");
		try {
			const body = {
				username: values.username,
				password: values.password,
			};

			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			if (!response.ok) {
				const { message } = await response.json();
				if (message !== null && message !== undefined)
					setError(message);
				else setError("There has been an error logging you in");
				return;
			}

			if (router.query.returnTo !== undefined)
				router.push(router.query.returnTo as string);
			else router.push("/");
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<AuthForm
			isLogin={true}
			validationSchema={validationSchema}
			initialValues={initialValues}
			handleSubmit={handleSubmit}
			error={error}
		/>
	);
};

export default Login;
