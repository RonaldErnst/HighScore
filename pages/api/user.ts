import { withApiAuth } from "@lib/auth";

export default withApiAuth(async (req, res) => {
	const user = req.session.user;

	if (user !== undefined) {
		res.json({
			...user,
		});
	} else {
		res.json(null);
	}
});
