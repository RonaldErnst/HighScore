import Navigation from "../components/navigation";
import { withPrivate } from "../components/Routing";

function Settings() {
    return (

        <Navigation active="settings"></Navigation>
    );
}

export default withPrivate(Settings);