import Navigation from "../components/navigation";
import Header from "../components/header";
import { routes, withPrivate } from "../components/Routing";
import { useAuth } from "../contexts/AuthContext";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

function Settings() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfRef = useRef();
	const { currentUser, updateUserPassword, updateUserEmail, logoutUser } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfRef.current.value) {
			return setError("Passwords do not match");
		}

		const promises = [];
		setLoading(true);
		setError("");

		if (emailRef.current.value && emailRef.current.value !== currentUser.email) {
			promises.push(updateUserEmail(emailRef.current.value));
		}
		if (passwordRef.current.value) {
			promises.push(updateUserPassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				router.push(routes.home);
			})
			.catch(() => {
				setError("Failed to update account");
			})
			.finally(() => {
				setLoading(false);
			});
	}

    async function handleLogout() {
        setError("")
    
        try {
          await logoutUser()
          router.push(routes.login)
        } catch {
          setError("Failed to log out")
        }
    }

	return (
		<>
			<Header />

			<div className="mt-16 p-3 w-full md:w-1/2 lg:w-1/3 mx-auto">
				<h1 className="text-xl">Einstellungen:</h1>

				<form
					onSubmit={handleSubmit}
					className="p-6 space-y-6 grid items-center justify-items-center"
				>
					<div className="space-y-2">
						<h2 className="text-md text-slate-700">
							E-Mail ändern
						</h2>

						<div
							className="w-full bg-white
										rounded-3xl
										flex flex-row
										shadow-xl
										text-lg
									    border-slate-400 border"
						>
							<label
								htmlFor="email"
								className="grid items-center justify-items-center px-2"
							>
								<i className="bi bi-envelope"></i>
							</label>
							<input
								ref={emailRef}
								name="email"
								type="email"
								placeholder="E-Mail"
								className="bg-transparent p-1 focus:outline-none"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<h2 className="text-md text-slate-700">
							Passwort ändern
						</h2>

						<div
							className="w-full bg-white
									    rounded-3xl
									    flex flex-row
									    shadow-xl
								        text-lg
									    border-slate-400 border"
						>
							<label
								htmlFor="password"
								className="grid items-center justify-items-center px-2"
							>
								<i className="bi bi-lock"></i>
							</label>
							<input
								ref={passwordRef}
								name="password"
								type="password"
								placeholder="New Password"
								className="bg-transparent p-1 focus:outline-none"
							/>
						</div>

						<div
							className="w-full bg-white
									    rounded-3xl
									    flex flex-row
									    shadow-xl
								        text-lg
									    border-slate-400 border"
						>
							<label
								htmlFor="password"
								className="grid items-center justify-items-center px-2"
							>
								<i className="bi bi-lock"></i>
							</label>
							<input
								ref={passwordConfRef}
								name="password"
								type="password"
								placeholder="Confirm Password"
								className="bg-transparent p-1 focus:outline-none"
							/>
						</div>
					</div>

					<button
						type="submit"
						className="w-1/2 bg-emerald-400 rounded-3xl shadow-2xl text-lg text-center font-semibold p-1"
					>
						Änderungen Speichern
					</button>

                    <button
                        onClick={handleLogout}
                        className="w-1/2 bg-red-500 rounded-3xl shadow-2xl text-lg text-center font-semibold p-1 mt-24"
                    >
                        Logout
                    </button>
				</form>
			</div>

			<Navigation active={routes.settings}></Navigation>
		</>
	);
}

export default withPrivate(Settings);
