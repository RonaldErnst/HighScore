import React, { useState } from "react";

function Button() {
    const {currentUser} = useAuth();

    return (
        <>
            <a href="/entries/add" className="text-6xl text-center
							   bg-emerald-400 shadow-xl
							   rounded-full p-1
							   mx-auto mb-6">
                <i className="bi bi-plus"></i>
            </a>
        </>
    )
}