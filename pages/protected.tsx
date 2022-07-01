import { withPageAuth } from "@lib/auth";
import type { NextPage } from "next";

export const getServerSideProps = withPageAuth();

const Home: NextPage = () => {
	return <div className="w-full h-full flex flex-col justify-center items-center text-center">{}</div>;
};

export default Home;
