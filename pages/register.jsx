import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { withPublic } from "../components/Routing";
import { useAuth } from "../contexts/AuthContext";

function Register() {
	const usernameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfRef = useRef();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { registerUser } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfRef.current.value) {
			return setError("Passwords do not match");
		}

		try {
			setError("");
			setLoading(true);
			await registerUser(usernameRef.current.value, emailRef.current.value, passwordRef.current.value);
			router.push("/");
		} catch(e) {
			setError("Failed to create an account");
		}

		setLoading(false);
	}

	return (
		<div
			className="
					w-full h-screen
					bg-cover bg-center bg-[url('/images/login-background.jpg')]
					grid items-center justify-items-center
					"
		>
			<div className="bg-white/75 rounded-3xl py-3 px-4">
				<h1 className="text-center text-2xl font-semibold py-3">
					HighScore
				</h1>

				{error && <div>{error}</div>}

				<form
					onSubmit={handleSubmit}
					className="grid items-center justify-items-center space-y-5"
				>
					<div
						className="
													w-full bg-white
													rounded-3xl
													flex flex-row
													shadow-2xl
													text-lg
													"
					>
						<label
							htmlFor="username"
							className="grid items-center justify-items-center px-2"
						>
							{" "}
							<i className="bi bi-person"></i>{" "}
						</label>
						<input
							ref={usernameRef}
							name="username"
							type="text"
							placeholder="Username"
							required
							className="bg-transparent p-1 focus:outline-none"
						/>
					</div>

					<div
						className="
													w-full bg-white
													rounded-3xl
													flex flex-row
													shadow-2xl
													text-lg"
					>
						<label
							htmlFor="email"
							className="grid items-center justify-items-center px-2"
						>
							{" "}
							<i className="bi bi-envelope"></i>{" "}
						</label>
						<input
							ref={emailRef}
							name="email"
							type="email"
							placeholder="E-Mail"
							required
							className="bg-transparent p-1 focus:outline-none"
						/>
					</div>

					<div
						className="
													w-full bg-white
													rounded-3xl
													flex flex-row
													shadow-2xl
													text-lg"
					>
						<label
							htmlFor="password"
							className="grid items-center justify-items-center px-2"
						>
							{" "}
							<i className="bi bi-lock"></i>{" "}
						</label>
						<input
							ref={passwordRef}
							name="password"
							type="password"
							placeholder="Password"
							required
							className="bg-transparent p-1 focus:outline-none"
						/>
					</div>

					<div
						className="
													w-full bg-white
													rounded-3xl
													flex flex-row
													shadow-2xl
													text-lg"
					>
						<label
							htmlFor="confirmPassword"
							className="grid items-center justify-items-center px-2"
						>
							{" "}
							<i className="bi bi-lock"></i>{" "}
						</label>
						<input
							ref={passwordConfRef}
							name="confirmPassword"
							type="password"
							placeholder="Confirm Password"
							required
							className="bg-transparent p-1 focus:outline-none"
						/>
					</div>

					<button
						disabled={loading}
						type="submit"
						className="w-1/2 bg-emerald-400 rounded-3xl shadow-2xl text-lg text-center font-semibold p-1"
					>
						Register
					</button>

					<div className="flex items-center flex-row space-x-6">
						<Link
							href="/login"
							className="text-gray-800 hover:underline"
						>
							Login
						</Link>
						<Link
							href="/reset-password"
							className="text-gray-800 hover:underline"
						>
							Forgot password
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default withPublic(Register);
