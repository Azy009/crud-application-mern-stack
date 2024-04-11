import * as Yup from "yup";

export const Bannervalidationedit = Yup.object({
  banner_name: Yup.string()
    .label("Banner Name")
    .min(2)
    .max(19)
    .required("Banner Name is required"),
    banner_alt: Yup.string()
    .label("Banner Alt")
    .min(2)
    .max(19)
    .required("Banner Alt is required"),
    banner_link: Yup.string()
    .label("Banner Link")
    .min(2)
    .required("Banner Link is required"),
    description: Yup.string()
    .min(5)
    .required("Description is required"),
    status: Yup.string()
    .required("Status is required")
    .oneOf(["Active", "Inactive"], "Invalid Status"),
    banner_type: Yup.string()
    .required("Status is required")
    .oneOf(["Banner", "Slider"], "Invalid Type"),
    banner: Yup.mixed()
});
