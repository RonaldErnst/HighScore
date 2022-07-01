import * as Yup  from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const userSignUpSchema = Yup.object({
    username: Yup.string()
        .required("Required")
        .min(5, "Must be at least 5 characters long")
        .max(20, "Must be 20 characters or less"),
    email: Yup.string().required("Required").email(),
    password: Yup.string().required("Required").password()
});

const userLoginSchema = Yup.object({
    username: Yup.string()
        .required("Required"),
    password: Yup.string().required("Required"),
});

export {
    userSignUpSchema,
    userLoginSchema,
}