import React, { useState } from "react";

function Button() {
    return (
        <>
            <Link href={routes.addEntry} passHref={true}>
                <div
                    className="text-6xl text-center
							   bg-emerald-400 hover:bg-emerald-300 hover:text-gray-800 shadow-xl
							   rounded-full p-1
							   mx-auto mb-6"
                >
                    <i className="bi bi-plus"></i>
                </div>
            </Link>
        </>
    )
}
