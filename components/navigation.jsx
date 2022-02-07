import Link from "next/link";
import React from "react";

export default function Navigation({ active }) {
	const tabs = ["home", "stats", "friends", "settings"];

	const currentIndex = tabs.indexOf(active);
	const prevElem = currentIndex == 0 ? null : tabs[currentIndex - 1];
	const afterElem =
		currentIndex == tabs.length - 1 ? null : tabs[currentIndex + 1];

	return (
		<nav
			className="w-full
                            fixed inset-x-0 bottom-0
                            flex flex-row
                            text-2xl text-center"
		>
			<Link
				href="/" passHref={true}
				className={`w-1/4 py-6 ${
					active == "home" ? "bg-white" : "bg-slate-300"
				} ${prevElem == "home" ? "rounded-tr-3xl" : ""}`}
			>
				<div>
					<i className="bi bi-house"></i>
				</div>
			</Link>

			<Link
				href="/dashboard" passHref={true}
				className={`w-1/4 py-6 ${
					active == "dashboard" ? "bg-white" : "bg-slate-300"
				} ${prevElem == "dashboard" ? "rounded-tr-3xl" : ""} ${
					afterElem == "dashboard" ? "rounded-tl-3xl" : ""
				}`}
			>
				<div>
					<i className="bi bi-graph-up"></i>
				</div>
			</Link>

			<Link
				href="/friends" passHref={true}
				className={`w-1/4 py-6 ${
					active == "friends" ? "bg-white" : "bg-slate-300"
				} ${prevElem == "friends" ? "rounded-tr-3xl" : ""} ${
					afterElem == "friends" ? "rounded-tl-3xl" : ""
				}`}
			>
				<div>
					<i className="bi bi-people"></i>
				</div>
			</Link>

			<Link
				href="/settings" passHref={true}
				className={`w-1/4 py-6 ${
					active == "settings" ? "bg-white" : "bg-slate-300"
				} ${prevElem == "settings" ? "rounded-tr-3xl" : ""} ${
					afterElem == "settings" ? "rounded-tl-3xl" : ""
				}`}
			>
					<i className="bi bi-gear"></i>
			</Link>
		</nav>
	);
}
