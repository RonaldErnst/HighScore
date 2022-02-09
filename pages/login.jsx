import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import { routes, withPublic } from "../components/Routing";
import { useAuth } from '../contexts/AuthContext';

function Login() {
	const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter();
	const { loginUser } = useAuth();


	async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
			await loginUser(emailRef.current.value, passwordRef.current.value);
      router.push(routes.home);
    } catch {
      setError("Login ist fehlgeschlagen")
    }

    setLoading(false)
  }

	return (
		<>
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

				<form onSubmit={handleSubmit}
					className="grid items-center justify-items-center space-y-5"
				>
					<div className="py-2 px-3 rounded-3xl text-xl">
						{error && <p><i className="bi bi-exclamation-triangle text-red-500 p-1"></i> {error}</p>}
					</div>
					<div
						className="
											w-full bg-white
											rounded-3xl
											flex flex-row
											shadow-2xl
											text-lg
											"
					>
						{/* TODO Error ausgeben */}
						<label
							htmlFor="email"
							className="grid items-center justify-items-center px-2"
						>
							{" "}
							<i className="bi bi-person"></i>{" "}
						</label>
						<input
							ref={emailRef}
							name="email"
							type="text"
							placeholder="E-Mail"
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
							className="bg-transparent p-1 focus:outline-none"
						/>
					</div>

					<button
						disabled={loading}
						type="submit"
						className="w-1/2 bg-emerald-400 rounded-3xl shadow-2xl text-lg text-center font-semibold p-1"
					>
						Login
					</button>

					<div className="flex items-center flex-row space-x-6">
						<Link href={routes.register}
							className="text-gray-800 hover:underline"
						>
							Register
						</Link>
						<Link href={routes.resetPassword}
							className="text-gray-800 hover:underline"
						>
							Forgot password
						</Link>
					</div>
				</form>
			</div>
		</div>
		</>
	);
}

export default withPublic(Login);