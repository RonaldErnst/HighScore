import Link from 'next/link';
import { useRef } from 'react';
import { routes, withPublic } from '../components/Routing';
import { useAuth } from '../contexts/AuthContext';

export const route = "/reset-password";

function ResetPassword() {
	const emailRef = useRef();
	const { resetUserPassword } = useAuth();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

	async function handleSubmit(e) {
		e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetUserPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Passwort konnte nicht zurückgesetzt werden")
    }

    setLoading(false)
	}

	return (
		<div
			className="
		w-full h-screen
		bg-cover bg-center bg-[url('/images/login-background.jpg')]
		grid items-center justify-items-center
		"
		>
			<div className="bg-white/75 rounded-3xl py-3 px-4 m-4 space-y-3">
				<h1 className="text-center text-2xl font-semibold">
					HighScore
				</h1>

				<div className="w-full text-center p-1">
					<p>
						Gib deine E-Mail ein und wir schicken dir <br />
						eine E-Mail zum zurücksetzten deines Passwortes.
					</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className="grid items-center justify-items-center space-y-5"
				>
					<div className="py-2 px-3 rounded-3xl text-xl">
						{error && <p><i className="bi bi-exclamation-triangle text-red-500 p-1"></i> {error}</p>}
					</div>
					<div
						className="
										bg-white
										rounded-3xl
										flex flex-row
										shadow-2xl
										text-lg
										mx-3"
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
							className="bg-transparent p-1 focus:outline-none"
						/>
					</div>

					<button
						disabled={loading}
						type="submit"
						className="w-1/2 bg-emerald-400 rounded-3xl shadow-2xl text-lg text-center font-semibold p-1"
					>
						Send link
					</button>

					<div className="flex items-center flex-row space-x-6">
						<Link
							href={routes.login}
							className="text-gray-800 hover:underline"
						>
							Login
						</Link>
						<Link
							href={routes.register}
							className="text-gray-800 hover:underline"
						>
							Register
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default withPublic(ResetPassword);