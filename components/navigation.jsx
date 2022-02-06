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

            <a href="/" id="home" className={`w-1/4 py-6 ${active == "home" ? "bg-white":"bg-slate-300"} ${prevElem == "home"? "rounded-tr-3xl" : ""}`}>
                <div className="">
                    <i className="bi bi-house"></i>
                </div>
            </a>

            <a href="/dashboard" className={`w-1/4 py-6 ${active == "dashboard" ? "bg-white":"bg-slate-300"} ${prevElem == "dashboard"? "rounded-tr-3xl" : ""} ${afterElem == "dashboard"? "rounded-tl-3xl" : ""}`}>
                <div className="">
                    <i className="bi bi-graph-up"></i>
                </div>
            </a>

            <a href="/friends" className={`w-1/4 py-6 ${active == "friends" ? "bg-white":"bg-slate-300"} ${prevElem == "friends" ? "rounded-tr-3xl" : ""} ${afterElem == "friends" ? "rounded-tl-3xl" : ""}`}>
                <div className="">
                    <i className="bi bi-people"></i>
                </div>
            </a>

            <a href="/settings" className={`w-1/4 py-6 ${active == "settings" ? "bg-white":"bg-slate-300"} ${prevElem == "settings" ? "rounded-tr-3xl" : ""} ${afterElem == "settings" ? "rounded-tl-3xl" : ""}`}>
                <div className="">
                    <i className="bi bi-gear"></i>
                </div>
            </a>

        </nav>
    )
}