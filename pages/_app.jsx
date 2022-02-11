import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from "../contexts/AuthContext";
import PageTitle from "../components/PageTitle";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<PageTitle />
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
