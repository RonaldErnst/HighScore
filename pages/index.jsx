import Navigation from "../components/navigation";
import { withPrivate } from "../components/Routing";
import { fireauth } from "../firebase";

function Home() {
	return (
		<>
			Hallo {fireauth.currentUser.displayName}!
			<Navigation active="home"></Navigation>
		</>
	);
}

export default withPrivate(Home);
