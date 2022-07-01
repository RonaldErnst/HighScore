import { withApiAuth } from "@lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    req.session.destroy();

    res.redirect("/");
}

export default withApiAuth(handler);