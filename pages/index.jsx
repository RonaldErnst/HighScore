import Navigation from "../components/navigation";
import Header from "../components/header";

export default function Dashboard() {
	return (
		<>
			<Header></Header>
			<h1>Index</h1>
			<Navigation active="home"></Navigation>
		</>

	);
}
