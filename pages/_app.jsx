import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }) {
  return <AuthProvider><Component {...pageProps} /></AuthProvider>;
}

export default MyApp
