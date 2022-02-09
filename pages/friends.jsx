import Header from "../components/header";
import Navigation from "../components/navigation";
import { routes, withPrivate } from '../components/Routing';

function Friends() {

	return (
		<>
			<Header/>
			<Navigation active={routes.friends}></Navigation>;
		</>

	)
}

export default withPrivate(Friends);