import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";

export function withPublic(Component) {
  return function WithPublic(props) {
    const { currentUser, loading }  = useAuth();
    const router = useRouter();

    if(!loading && currentUser) {
      router.replace("/");
      return <h1>Loading ...</h1>;
    }

    return <Component { ...props }/>
  }
}

export function withPrivate(Component) {
  return function WithPublic(props) {
    const { currentUser, loading }  = useAuth();
    const router = useRouter();

    if(!currentUser) {
      router.replace("/login");
      return <h1>Loading ...</h1>;
    }

    return <Component { ...props }/>
  }
}