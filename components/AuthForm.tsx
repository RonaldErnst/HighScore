import Link from "next/link";
import { Formik, Form, FormikHelpers } from "formik";
import { TextInput } from "@components/formik";


interface Props<T> {
	isLogin: boolean;
    handleSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
    initialValues: any;
    validationSchema: any;
    error: string;
}


const AuthForm = <T,>({ isLogin, handleSubmit, initialValues, validationSchema, error } : Props<T>) => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="card md:min-w-[400px]">
				<div className="card-body md:min-w-[400px] bg-neutral">
					<h1 className="card-title">
						{isLogin ? "Login" : "Sign Up"}
					</h1>
                    {error? (
                        <div className="alert alert-error shadow-lg">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span>{error}</span>
                        </div>
                      </div>
                    ) : null}
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						{({ isSubmitting }) => (
							<Form className="flex flex-col gap-y-4 justify-center form-control">
								<TextInput
									label="Username"
									name="username"
									type="text"
									placeholder="Your username"
								/>

								{isLogin ? null : (
									<TextInput
										label="E-Mail"
										name="email"
										type="email"
										placeholder="example@example.com"
									/>
								)}

								<TextInput
									label="Password"
									name="password"
									placeholder={
										isLogin
											? "Your password"
											: "A strong password"
									}
									type="password"
								/>

								{isLogin ? null : (
									<TextInput
										label="Confirm password"
										name="passwordConfirmation"
										placeholder="Confirm password"
										type="password"
									/>
								)}

								<div className="card-actions flex-col justify-between items-center md:flex-row">
									<button
										className="btn btn-secondary no-animation"
										type="submit"
										disabled={isSubmitting}
									>
										{isLogin ? "Login" : "Create Account"}
									</button>
									<Link href={isLogin? "/auth/signup" : "/auth/login"} passHref={true}>
										<div className="btn btn-accent no-animation">
											{isLogin
												? "Create new account"
												: "Login with existing account"}
										</div>
									</Link>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;