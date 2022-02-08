import Navigation from "../components/navigation";
import Header from "../components/header";
import { withPrivate } from "../components/Routing";
import { fireauth } from "../firebase";

function Home() {
	return (
		<>
			<Header/>
			Hallo {fireauth.currentUser.displayName}!
			<Navigation active="home"></Navigation>
		</>
	);
}

export default withPrivate(Home);
