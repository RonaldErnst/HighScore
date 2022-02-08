import Link from "next/link";
import React from "react";

export default function Navigation({ active }) {
	const tabs = ["home", "statistics", "friends", "settings"];

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
			<Link href="/" passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == "home" ? "bg-white" : "bg-slate-300 navInnerShadow"
					} ${prevElem == "home" ? "rounded-tr-3xl" : ""}`}
				>
					<i className="bi bi-house"></i>
				</div>
			</Link>

			<Link href="/statistics" passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == "statistics" ? "bg-white" : "bg-slate-300 navInnerShadow"
					} ${prevElem == "statistics" ? "rounded-tr-3xl" : ""} ${
						afterElem == "statistics" ? "rounded-tl-3xl" : ""
					}`}
				>
					<i className="bi bi-graph-up"></i>
				</div>
			</Link>

			<Link href="/friends" passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == "friends" ? "bg-white" : "bg-slate-300 navInnerShadow"
					} ${prevElem == "friends" ? "rounded-tr-3xl" : ""} ${
						afterElem == "friends" ? "rounded-tl-3xl" : ""
					}`}
				>
					<i className="bi bi-people"></i>
				</div>
			</Link>

			<Link href="/settings" passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == "settings" ? "bg-white" : "bg-slate-300 navInnerShadow"
					} ${prevElem == "settings" ? "rounded-tr-3xl" : ""} ${
						afterElem == "settings" ? "rounded-tl-3xl" : ""
					}`}
				>
					<i className="bi bi-gear"></i>
				</div>
			</Link>
		</nav>
	);
}
