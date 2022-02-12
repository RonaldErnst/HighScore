import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { routes, withPrivate } from "../components/Routing";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

function Settings() {
	const { currentUser, updateUserDisplayname, updateUserEmail, updateUserPassword, logoutUser } =
		useAuth();
	const usernameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfRef = useRef();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		usernameRef.current.value = currentUser.displayName;
		emailRef.current.value = currentUser.email;
	}, [currentUser.displayName, currentUser.email]);

	function handleError(code) {
		switch (code) {
			case "auth/invalid-email":
				setError("Bitte E-Mail überprüfen!");
				break;
			case "auth/weak-password":
				setError("Passwort muss mindestens 6 Zeichen lang sein");
				break;
			default:
				console.log(code);
				setError("Fehler beim updaten des Accounts");
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		
		// Validation Checks
		if (passwordRef.current.value !== passwordConfRef.current.value) {
			return setError("Passwörter stimmen nicht überein");
		}

		const promises = [];
		setLoading(true);
		setError("");

		// Perform updates
		if(usernameRef.current.value != currentUser.displayName) {
			promises.push(updateUserDisplayname(usernameRef.current.value));
		}

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateUserEmail(emailRef.current.value));
		}

		if (passwordRef.current.value) {
			promises.push(updateUserPassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				router.push(routes.home);
			})
			.catch((e) => {
				handleError(e.code);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	async function handleLogout() {
		setError("");

		try {
			await logoutUser();
			router.push(routes.login);
		} catch {
			setError("Fehler beim ausloggen");
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
					{error && (
						<div className="py-2 px-3 rounded-3xl text-xl">
							<p>
								<i className="bi bi-exclamation-triangle text-red-500 p-1"></i>{" "}
								{error}
							</p>
						</div>
					)}

					<div className="space-y-2">
						<h2 className="text-md text-slate-700">
							Username ändern
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
								ref={usernameRef}
								name="username"
								type="text"
								placeholder="Username"
								className="bg-transparent p-1 focus:outline-none"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<h2 className="text-md text-slate-700">
							Name ändern
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
								htmlFor="name"
								className="grid items-center justify-items-center px-2"
							>
								<i className="bi bi-person"></i>
							</label>
							<input
								ref={emailRef}
								name="name"
								type="name"
								placeholder="Name"
								className="bg-transparent p-1 focus:outline-none"
							/>
						</div>
					</div>

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
						disabled={loading}
						type="submit"
						className="w-1/2 bg-emerald-400 hover:bg-emerald-300 hover:text-gray-800 rounded-3xl shadow-2xl text-lg text-center font-semibold p-1"
					>
						Änderungen Speichern
					</button>

					<button
						onClick={handleLogout}
						className="w-1/2 bg-red-500 hover:bg-red-400 hover:text-gray-800 rounded-3xl shadow-2xl text-lg text-center font-semibold p-1 mt-24"
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
