import Navigation from "../components/navigation";
import Header from "../components/header";
import { routes, withPrivate } from "../components/Routing";
import { useAuth } from "../contexts/AuthContext";

function Home() {
	const {currentUser} = useAuth();

	return (
		<>
			<Header/>
			<div className="mt-16 p-3 w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col space-y-4">

				<p>Hallo {currentUser.displayName}!</p>

				<a>
					<div className="shadow-md rounded-3xl p-5 border-slate-200 border">
						<div className="flex flex-row justify-between">
							<h2>vor 4 Tagen</h2>
							<span className="border-4 border-emerald-400 py-2 px-3 rounded-3xl shadow">Gras</span>
						</div>
						<div className="text-slate-600">Score: 8/10</div>
					</div>
				</a>

				<a>
					<div className="shadow-md rounded-3xl p-5 border-slate-200 border">
						<div className="flex flex-row justify-between">
							<h2>vor 10 Tagen</h2>
							<span className="border-4 border-emerald-400 py-2 px-3 rounded-3xl shadow">Gras</span>
						</div>
						<div className="text-slate-600">Score: 5/10</div>
					</div>
				</a>


			</div>
			<Navigation active={routes.home}></Navigation>
		</>
	);
}
export default withPrivate(Home);
