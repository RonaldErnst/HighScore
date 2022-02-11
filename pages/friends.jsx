import Header from "../components/Header";
import Navigation from "../components/Navigation";
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