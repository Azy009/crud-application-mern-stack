import * as Yup from "yup";

export const Attributevalidation = Yup.object({
  attributeName: Yup.string().required('Attribute Name is required'),
  attributeValues: Yup.array().required('Attribute Values are required'),
});
