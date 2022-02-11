import { useEffect, useState } from 'react';
import Head from 'next/head'
import { routes, routeTitles } from "../components/Routing";
import { useRouter } from 'next/router';

export default function PageTitle() {
    const [title, setTitle] = useState("");
    const router = useRouter(); 

    useEffect(() => {
        let newTitle = "";
        if(router.pathname in routeTitles) {
            newTitle = routeTitles[router.pathname] + " - ";
        }

        setTitle(newTitle);
    }, [router.pathname]);

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <title>{title}HighScore</title>
            </Head>
        </>
    )
}