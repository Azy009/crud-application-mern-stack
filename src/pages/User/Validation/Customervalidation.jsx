import * as Yup from "yup";

export const Customervalidation = Yup.object({
  first_name: Yup.string()
    .label("First Name")
    .min(2)
    .max(19)
    .required("Please Enter First Name"),
  last_name: Yup.string()
    .label("Last Name")
    .min(2)
    .max(19)
    .required("Please Enter Last Name"),
  info: Yup.string()
    .label("Info")
    .min(2)
    .required("Please Enter Customer Info"),
  email: Yup.string()
    .label("Email ID")
    .min(2)
    .max(19)
    .required("Please Enter Email ID"),
  mobile: Yup.number()
    .label("Mobile No")
    .min(1000000000, "Mobile number must be at least 10 digits")
    .max(9999999999, "Mobile number cannot be more than 10 digits")
    .required("Please Enter Mobile No"),
  address: Yup.string()
    .label("Address")
    .min(2)
    .max(19)
    .required("Please Enter Address"),
  country: Yup.string().label("Country").min(4).required("Country is required"),
  state: Yup.string().label("State").min(4).required("State is required"),
  city: Yup.string().label("City").min(4).required("City is required"),
  pincode: Yup.number()
    .label("PinCode")
    .min(6)
    .max(6)
    .required("Pincode is required"),
  status: Yup.string()
    .required("Status is required")
    .oneOf(["Active", "Inactive"], "Invalid Status"),
});
