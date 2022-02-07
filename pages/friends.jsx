import Navigation from "../components/navigation";
import { withPrivate } from '../components/Routing';

function Friends() {

	return <Navigation active="friends"></Navigation>;
}

export default withPrivate(Friends);