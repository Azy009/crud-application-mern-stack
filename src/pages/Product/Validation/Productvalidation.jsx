import * as Yup from "yup";

export const Productvalidation = Yup.object({
  product_name: Yup.string()
    .label("Product Name")
    .min(2)
    .max(19)
    .required("Please Enter Product Name"),
  product_url: Yup.string()
    .label("Product Url")
    .min(2)
    .max(19)
    .required("Please Enter Product Url"),
  selling_price: Yup.number()
    .label("Selling Price")
    .required("Please Enter Selling Price"),
  mrp_price: Yup.number()
    .label("MRP Price")
    .required("Please Enter MRP Price"),
  stock: Yup.number()
    .label("Stock")
    .min(2)
    .required("Please Enter Stock"),
  weight: Yup.number()
    .label("Weight")
    .required("Please Enter Weight"),
  weight_type: Yup.string()
    .required("Please Enter Weight type")
    .oneOf(["ML","L","GM"], "Invalid Weight Type"),
  meta_title: Yup.string()
    .label("Meta Title")
    .min(2)
    .max(19)
    .required("Please Enter Meta Title"),
    brand: Yup.string()
    .label("Brand"),
    color: Yup.string()
    .label("Color"),
    size: Yup.string()
    .label("Size"),
  meta_keywords: Yup.string()
    .label("Meta Keywords")
    .min(2)
    .max(19)
    .required("Please Enter Meta Keywords"),
  meta_description: Yup.string()
    .min(2)
    .max(19)
    .required("Please Enter Meta Description"),
  sort_description: Yup.string()
    .min(10)
    .required("Please Enter Sort Description"),
  editor: Yup.string()
    .label("Product Description")
    .min(4)
    .required("Product Description is required"),
  parent_category: Yup.array()
    .label("Parent Category").required("Parent Category is required"),
  child_category: Yup.array()
    .label("child Category"),
    // attribute: Yup.array()
    // .label("Attribute"),
  status: Yup.string()
    .required("Status is required")
    .oneOf(["Active", "Inactive"], "Invalid Status"),
  trendingproduct: Yup.string()
    .required("Trending Product is required")
    .oneOf(["Active", "Inactive"], "Invalid Status"),
  newarrivedproduct: Yup.string()
    .required("New Arrived Product is required")
    .oneOf(["Active", "Inactive"], "Invalid Status"),
  featuredproduct: Yup.string()
    .required("Featured Product is required")
    .oneOf(["Active", "Inactive"], "Invalid Status"),
  product_image1: Yup.mixed().required("Image 1 is required"),
  product_image2: Yup.mixed().required("Image 2 is required"),
  product_image3: Yup.mixed().required("Image 3 is required"),
  product_image4: Yup.mixed().required("Image 4 is required"),
  // product_image5: Yup.mixed(),
});
