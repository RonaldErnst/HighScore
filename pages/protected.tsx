import { withPageAuth } from "@lib/auth";
import { useUser } from "@lib/utils";
import type { NextPage } from "next";

export const getServerSideProps = withPageAuth();

const Home: NextPage = () => {
    const { user } = useUser({redirectTo: "/auth/login"});

	return <div className="w-full h-full flex flex-col justify-center items-center text-center text-white">{JSON.stringify(user)}</div>;
};

export default Home;
