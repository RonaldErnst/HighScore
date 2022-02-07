import Navigation from "../components/navigation";
import Header from "../components/header";

export default function Dashboard() {
    return (
        <>
            <Header/>
            <Navigation active="dashboard"></Navigation>
        </>
    );
}