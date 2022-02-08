import Header from "../components/header";
import Navigation from "../components/navigation";
import { withPrivate } from '../components/Routing';

export const route = "/friends";

function Friends() {

	return (
		<>
			<Header/>
			<Navigation active={route}></Navigation>;
		</>

	)
}

export default withPrivate(Friends);