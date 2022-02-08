import Navigation from "../components/navigation";
import Header from "../components/header";
import { withPrivate } from "../components/Routing";
import { useAuth } from "../contexts/AuthContext";

function Home() {
	const { currentUser } = useAuth();

	return (
		<>
			<Header/>
			Hallo {currentUser.displayName}!
			<Navigation active="home"></Navigation>
		</>
	);
}

export default withPrivate(Home);
