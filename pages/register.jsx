import Link from 'next/link';
import { withPublic } from '../components/Routing';

function Register() {
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

				<form
					action="/signup"
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
							id="username"
							name="username"
							type="text"
							placeholder="Username"
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
							id="email"
							name="email"
							type="email"
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
							id="password"
							name="password"
							type="password"
							placeholder="Password"
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
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							placeholder="Confirm Password"
							className="bg-transparent p-1 focus:outline-none"
						/>
					</div>

					<button
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