import Navigation from "../components/navigation";
import { withPrivate } from "../components/Routing";

function Home() {

	return <Navigation active="home"></Navigation>;
}

export default withPrivate(Home);
