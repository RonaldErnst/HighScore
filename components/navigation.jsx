import Link from "next/link";
import React from "react";
import { route as homeRoute } from '../pages/index';
import { route as statsRoute } from '../pages/statistics';
import { route as friendsRoute } from '../pages/friends';
import { route as settingsRoute } from '../pages/settings';

export default function Navigation({ active }) {
	const tabs = [homeRoute, statsRoute, friendsRoute, settingsRoute];

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
			<Link href={homeRoute} passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == homeRoute ? "bg-white" : "bg-slate-300 hover:bg-slate-400 navInnerShadow"
					} ${prevElem == homeRoute ? "rounded-tr-3xl" : ""}`}
				>
					<i className="bi bi-house"></i>
				</div>
			</Link>

			<Link href={statsRoute} passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == statsRoute ? "bg-white" : "bg-slate-300 hover:bg-slate-400 navInnerShadow"
					} ${prevElem == statsRoute ? "rounded-tr-3xl" : ""} ${
						afterElem == statsRoute ? "rounded-tl-3xl" : ""
					}`}
				>
					<i className="bi bi-graph-up"></i>
				</div>
			</Link>

			<Link href={friendsRoute} passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == friendsRoute ? "bg-white" : "bg-slate-300 hover:bg-slate-400 navInnerShadow"
					} ${prevElem == friendsRoute ? "rounded-tr-3xl" : ""} ${
						afterElem == friendsRoute ? "rounded-tl-3xl" : ""
					}`}
				>
					<i className="bi bi-people"></i>
				</div>
			</Link>

			<Link href={settingsRoute} passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == settingsRoute ? "bg-white" : "bg-slate-300 hover:bg-slate-400 navInnerShadow"
					} ${prevElem == settingsRoute ? "rounded-tr-3xl" : ""} ${
						afterElem == settingsRoute ? "rounded-tl-3xl" : ""
					}`}
				>
					<i className="bi bi-gear"></i>
				</div>
			</Link>
		</nav>
	);
}
