import React from 'react';

export default function Navigation({ active }) {

    const tabs = ["home", "dashboard", "friends", "settings"];

    const currentIndex = tabs.indexOf(active);
    const prevElem = currentIndex == 0? null : tabs[currentIndex - 1];
    const afterElem = currentIndex == tabs.length - 1? null : tabs[currentIndex + 1];

    return (

        <nav className="w-full
                            fixed inset-x-0 bottom-0
                            flex flex-row
                            text-2xl text-center">

            <a href="" id="home" className={`w-1/4 py-6 ${active == "home" ? "bg-white":"bg-slate-300"} ${prevElem == "home"? "rounded-tr-2xl" : ""}`}>
                <div className="">
                    <i className="bi bi-house"></i>
                </div>
            </a>

            <a href="" className={`w-1/4 py-6 ${active == "dashboard" ? "bg-white":"bg-slate-300"} ${prevElem == "dashboard"? "rounded-tl-2xl" : ""}`}>
                <div className="">
                    <i className="bi bi-house"></i>
                </div>
            </a>

            <a href="" className={`w-1/4 py-6 ${active == "friends" ? "bg-white":"bg-slate-300"}`}>
                <div className="">
                    <i className="bi bi-house"></i>
                </div>
            </a>

            <a href="" className={`w-1/4 py-6 ${active == "settings" ? "bg-white":"bg-slate-300"}`}>
                <div className="">
                    <i className="bi bi-house"></i>
                </div>
            </a>

        </nav>
    )
}