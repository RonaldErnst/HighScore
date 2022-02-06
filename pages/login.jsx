export default function Login() {
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
					action="/login"
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

					<button
						type="submit"
						className="w-1/2 bg-emerald-400 rounded-3xl shadow-2xl text-lg text-center font-semibold p-1"
					>
						Login
					</button>

					<div className="flex items-center flex-row space-x-6">
						<a
							href="/register"
							className="text-gray-800 hover:underline"
						>
							Register
						</a>
						<a
							href="/reset-password"
							className="text-gray-800 hover:underline"
						>
							Forgot password
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}
