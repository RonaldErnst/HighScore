import React, { useState } from "react";
import Link from "next/link";
import { routes } from "./Routing";

export default function Button() {
    return (
        <>
            <Link href={routes.addEntry} passHref={true}>
                <div
                    className="text-6xl justify-center
                               flex items-center
							   bg-emerald-400 hover:bg-emerald-300 hover:text-gray-800 shadow-xl
							   rounded-full p-1
							   mx-auto bottom-28 inset-x-0 fixed
							   w-20 h-20"
                >
                    <i className="bi bi-plus"></i>
                </div>
            </Link>
        </>
    )
}