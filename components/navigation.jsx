import Link from "next/link";
import React from "react";
import { routes } from './Routing';

export default function Navigation({ active }) {
	const tabs = [routes.home, routes.statistics, routes.friends, routes.settings];
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
			<Link href={routes.home} passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == routes.home ? "bg-white" : "bg-slate-300 hover:bg-slate-400 navInnerShadow"
					} ${prevElem == routes.home ? "rounded-tr-3xl" : ""}`}
				>
					<i className="bi bi-house"></i>
				</div>
			</Link>

			<Link href={routes.statistics} passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == routes.statistics ? "bg-white" : "bg-slate-300 hover:bg-slate-400 navInnerShadow"
					} ${prevElem == routes.statistics ? "rounded-tr-3xl" : ""} ${
						afterElem == routes.statistics ? "rounded-tl-3xl" : ""
					}`}
				>
					<i className="bi bi-graph-up"></i>
				</div>
			</Link>

			<Link href={routes.friends} passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == routes.friends ? "bg-white" : "bg-slate-300 hover:bg-slate-400 navInnerShadow"
					} ${prevElem == routes.friends ? "rounded-tr-3xl" : ""} ${
						afterElem == routes.friends ? "rounded-tl-3xl" : ""
					}`}
				>
					<i className="bi bi-people"></i>
				</div>
			</Link>

			<Link href={routes.settings} passHref={true}>
				<div
					className={`w-1/4 py-6 ${
						active == routes.settings ? "bg-white" : "bg-slate-300 hover:bg-slate-400 navInnerShadow"
					} ${prevElem == routes.settings ? "rounded-tr-3xl" : ""} ${
						afterElem == routes.settings ? "rounded-tl-3xl" : ""
					}`}
				>
					<i className="bi bi-gear"></i>
				</div>
			</Link>
		</nav>
	);
}
