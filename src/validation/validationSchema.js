import * as Yup from "yup";

export const categoryFormSchema = Yup.object({
    categoryName: Yup.string().required(),
    categoryImageUrl: Yup.string().required().url(),
}).required();

export const productFormSchema = Yup.object({
    productName: Yup.string().required(),
    productPrice: Yup.number().required(),
    productImageUrl: Yup.string().required().url(),
    productCategory: Yup.string().required(),
}).required();

export const registerValidation = Yup.object({
    name: Yup.string()
        .required("Name is required.")
        .min(3, "Name must be at least 3 characters.")
        .max(50, "Name cannot exceed 50 characters."),

    email: Yup.string()
        .required("Email is required.")
        .email("Please enter a valid email address."),

    password: Yup.string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters."),

    confirmPassword: Yup.string()
        .required("Please confirm your password.")
        .oneOf([Yup.ref("password"), null], "Passwords must match."),
}).required();

export const loginValidation = Yup.object({
    email: Yup.string()
        .required("Email is required.")
        .email("Please enter a valid email address."),

    password: Yup.string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters."),
}).required();
