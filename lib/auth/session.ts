import { IUser } from "@lib/db";
import { IronSession, IronSessionOptions } from "iron-session";
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
	GetServerSideProps,
	GetServerSidePropsContext,
	GetServerSidePropsResult,
	NextApiHandler,
} from "next";

/////////////////////////////////////////////////////////////////////////////////////////////////
// CONFIG
/////////////////////////////////////////////////////////////////////////////////////////////////

export type SessionUser = {
    id: string;
    username: string;
    role: string;
    lastOnline: Date;
}

declare module "iron-session" {
	interface IronSessionData {
		user?: SessionUser;
	}
}

const sessionOptions: IronSessionOptions = {
	password: process.env.IRONSESSION_SECRET as string,
	cookieName: "HighScore",
	// secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
	cookieOptions: {
		secure: process.env.NODE_ENV === "production",
	},
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// API SESSION FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////

function withApiSession(handler: NextApiHandler) {
	return withIronSessionApiRoute(handler, sessionOptions);
}

export function withApiAuth(handler?: NextApiHandler) {
	return withApiSession(async function (req, res) {
		const user = req.session.user;

		// No user logged in, redirect
		if (!user) {
			res.status(401).json({
				message:
					"The user does not have an active session or is not authenticated",
			});
			return;
		}

		if (handler !== undefined) return await handler(req, res);
	});
}

export function withApiNoAuth(handler?: NextApiHandler) {
	return withApiSession(async function (req, res) {
		const user = req.session.user;

		// Redirect if user is logged in
		if (user) {
			res.status(403).json({
				message: "The user is not allowed to perform this action",
			});
			return;
		}

		if (handler !== undefined) return await handler(req, res);
	});
}

export async function saveUserSession(session: IronSession, user: IUser) {
	session.user = {
		id: user.id,
        username: user.username,
        role: user.role,
        lastOnline: user.lastOnline,
	};

	await session.save();
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// SSR SESSION FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////
// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
function withPageSession(handler: GetServerSideProps) {
	return withIronSessionSsr(handler, sessionOptions);
}

export function withPageAuth(
	handler?: GetServerSideProps,
	returnTo?: string
) {
	return withPageSession(async function (
		context: GetServerSidePropsContext
	): Promise<GetServerSidePropsResult<any>> {
		const { req } = context;
		const user = req.session.user;

        // User not logged in or authenticated, redirect
		if (user === undefined) {
			return {
				redirect: {
					destination: `/auth/login?returnTo=${encodeURIComponent(
						returnTo || context.resolvedUrl
					)}`,
					permanent: false,
				},
			};
		}

		let ret: any = { props: {} };
		if (handler !== undefined) {
			ret = await handler(context);
		}

		if (ret.props instanceof Promise)
			return {
				...ret,
				props: ret.props.then((props: any) => ({
					...props,
					user: user,
				})),
			};

		return { ...ret, props: { ...ret.props, user: user } };
	});
}

export function withPageNoAuth(
	handler?: GetServerSideProps
) {
    return withPageSession(async function (
		context: GetServerSidePropsContext
	): Promise<GetServerSidePropsResult<any>> {

		const { req } = context;
		const user = req.session.user;

        // User logged in, redirect
		if (user !== undefined) {
			return {
				redirect: {
					destination: "/",
					permanent: false,
				},
			};
		}

		let ret: any = { props: {} };
		if (handler !== undefined) {
			ret = await handler(context);
		}

		if (ret.props instanceof Promise)
			return {
				...ret,
				props: ret.props.then((props: any) => ({
					...props,
					user: null,
				})),
			};

		return { ...ret, props: { ...ret.props, user: null } };
	});
}
