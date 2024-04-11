import * as Yup from "yup";

export const Webinfovalidation = Yup.object({
  website_name: Yup.string()
    .label("Website Name"),
    mobile_no: Yup.number()
    .label("Mobile No")
    .min(1000000000, "Mobile number must be at least 10 digits")
    .max(9999999999, "Mobile number cannot be more than 10 digits"),
    address: Yup.string()
    .label("Address"),
    email: Yup.string()
    .label("Email"),
    facebook: Yup.string()
    .label("facebook"),
    instagram: Yup.string()
    .label("Instagram"),
    youtube: Yup.string()
    .label("Youtube"),
    twitter: Yup.string()
    .label("Twitter"),
    pinterest: Yup.string()
    .label("Pinterest"),
    gstno: Yup.string()
    .label("GST No"),
    logo: Yup.mixed(),
});
