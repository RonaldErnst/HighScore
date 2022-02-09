import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";

export function withPublic(Component) {
  return function WithPublic(props) {
    const { currentUser, loading }  = useAuth();
    const router = useRouter();

    if(!loading && currentUser) {
      router.replace(routes.home);
      return null;
    }

    return <Component { ...props }/>
  }
}

export function withPrivate(Component) {
  return function WithPublic(props) {
    const { currentUser }  = useAuth();
    const router = useRouter();

    if(!currentUser) {
      router.replace(routes.login);
      return null;
    }

    return <Component { ...props }/>
  }
}

export const routes = {
  home: "/",
  login: "/login",
  resetPassword: "/reset-password",
  register: "/register",
  settings: "/settings",
  statistics: "/statistics",
  friends: "/friends"
}