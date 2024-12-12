import * as yup from "yup";

export const categoryFormSchema = yup
.object({
    categoryName: yup.string().required(),
    categoryImageUrl: yup.string().required().url(),
})
.required()