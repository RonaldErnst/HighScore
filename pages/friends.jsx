import Header from "../components/header";
import Navigation from "../components/navigation";
import { withPrivate } from '../components/Routing';

function Friends() {

	return (
		<>
			<Header/>
			<Navigation active="friends"></Navigation>;
		</>

	)
}

export default withPrivate(Friends);