import * as Yup from "yup";

export const Brandvalidation = Yup.object({
  brand_name: Yup.string()
    .label("Banner Name")
    .min(2)
    .max(49)
    .required("Banner Name is required"),
    description: Yup.string()
    .min(5)
    .required("Description is required"),
    status: Yup.string()
    .required("Status is required")
    .oneOf(["Active", "Inactive"], "Invalid Status"),
    banner: Yup.mixed().required("Image is required"),
});
