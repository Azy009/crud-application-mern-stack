import React, { useEffect, useRef, useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import JoditEditor from "jodit-react";
import { Field, Form, Formik } from "formik";
import img3 from "../../../assets/selectbanner.webp";
import { IoAddCircle } from "react-icons/io5";
import {
  useGetAllCategoriesQuery,
  useGetLevelOneCategoryQuery,
  usePostFetchSubCategoryMutation,
} from "../../../store/api/categoryapi";
import {
  useGetSingleProductQuery,
  usePatchProductMutation,
  usePostProductMutation,
} from "../../../store/api/productapi";
import { Productvalidationedit } from "../Validation/Productvalidationedit";
import { useGetAttributeByCategoryIdQuery } from "../../../store/api/attributeapi";
import { useGetAllVariantQuery } from "../../../store/api/variantapi";
const EditProductform = ({ id }) => {
  const [apiresponse, setapiresponse] = useState({});
  const imageInputRef1 = useRef(null);
  const imageInputRef2 = useRef(null);
  const imageInputRef3 = useRef(null);
  const imageInputRef4 = useRef(null);
  const [categoryid, setcategoryid] = useState([]);
  const [subcategoryid, setsubcategoryid] = useState([]);
  const [selectedatt, setselectedatt] = useState([]);
  const nvg = useNavigate();

  let getlevelonecategory = useGetLevelOneCategoryQuery();

  const config = {
    height: "300px",
  };

  // remove attribute from array of array state here
  const deleteItem = (name, value, totaldata) => {
    console.log("first bbb", name, value, totaldata);

    const updatedData = totaldata
      .map((innerArray) => innerArray.filter((item) => !(item[name] === value)))
      .filter((innerArray) => innerArray.length > 0);

    console.log("update data", updatedData);
    return updatedData;
  };

  // remove attribute from array of array end here

  // create product api start here
  const [patchproduct] = usePatchProductMutation();

  const ProductForm = async (value) => {
    try {
      const response = await patchproduct({ data: value, id: id });
      if (!response.error) {
        if (response.data.status == "successfully") {
          nvg("/productlist/2");
          window.location.reload();
        }
      } else {
        setapiresponse(response.error.error);
      }
    } catch (error) {}
  };
  // create product api end here

  const selectedvalues = (data) => {
    setselectedatt(
      data.reduce((result, innerArray) => {
        innerArray.forEach((item) => {
          const keys = Object.keys(item);
          keys.forEach((key) => {
            const value = item[key];
            result.push({ key, value });
          });
        });
        return result;
      }, [])
    );
  };

  // fetch sub category api start here
  const [getsubcatgory, getresponse] = usePostFetchSubCategoryMutation();
  const [subcategories, setsubcategories] = useState([]);
  const FetchsubCategorys = async (value) => {
    try {
      const formdata = new FormData();
      formdata.append("categorys", value);
      const response = await getsubcatgory(formdata);
      if (response.data?.message) {
        setcategoryid([value]);
      } else {
        if (response.data?.data[0]?.categories) {
          setsubcategories(response.data.data[0].categories);
          setcategoryid([value]);
          setsubcategoryid([response.data?.data[0]?.categories[0]._id]);
        } else {
          setcategoryid([value]);
        }
      }
    } catch (error) {}
  };
  // fetch sub category api end here

  // fetch all product api start here
  const { data: data, isLoading } = useGetSingleProductQuery(id);
  // fetch all product api start here

  // fetch all product variant api start here
  const { data: variantdata, isLoading: variantloader } =
    useGetAllVariantQuery(id);
  // fetch all product variant api end here

  console.log("variantdata is here", variantdata);
  // fetch Attribute api start here
  const { data: attributedata } = useGetAttributeByCategoryIdQuery(
    !subcategoryid[0] ? (!categoryid[0] ? 0 : categoryid[0]) : subcategoryid[0]
  );
  // fetch Attribute api end here

  useEffect(() => {
    if (data) {
      FetchsubCategorys(data.data.parent_category);
      selectedvalues(data.data.dynamicAttributes);
    }
  }, [data]);
  // fetch all product api start here

  return isLoading == true ? (
    ""
  ) : (
    <div className="container-fuild pb-4 pt-3 px-2 bg-white">
      <Formik
        initialValues={{
          product_name: data.data.product_name,
          product_url: data.slug,
          selling_price: data.data.selling_price,
          mrp_price: data.data.mrp_price,
          stock: data.data.stock,
          weight: data.data.weight,
          weight_type: data.data.weight_type,
          sort_description: data.data.sort_description,
          meta_title: data.data.meta_title,
          meta_description: data.data.meta_description,
          meta_keywords: data.data.meta_keywords,
          editor: data.data.description,
          parent_category: data.data.parent_category,
          child_category: data.data.child_category,
          status: data.data.status,
          brand: data.data.brand,
          color: data.data.color,
          size: data.data.size,
          // attribute: data.data.dynamicAttributes,
          trendingproduct: data.data.trendingproduct,
          newarrivedproduct: data.data.newarrivedproduct,
          featuredproduct: data.data.featuredproduct,
          product_image1: data.data.product_image1,
          product_image2: data.data.product_image2,
          product_image3: data.data.product_image3,
          product_image4: data.data.product_image4,
        }}
        validationSchema={Productvalidationedit}
        onSubmit={(values) => {
          const formdata = new FormData();
          formdata.append("product_name", values.product_name);
          formdata.append("product_url", values.product_url);
          formdata.append("meta_title", values.meta_title);
          formdata.append("meta_keywords", values.meta_keywords);
          formdata.append("meta_description", values.meta_description);
          formdata.append("editor", values.editor);
          formdata.append("parent_category", values.parent_category);
          formdata.append("child_category", values.child_category);
          formdata.append("sort_description", values.sort_description);
          formdata.append("weight_type", values.weight_type);
          formdata.append("weight", values.weight);
          formdata.append("stock", values.stock);
          formdata.append("mrp_price", values.mrp_price);
          formdata.append("selling_price", values.selling_price);
          formdata.append("status", values.status);
          formdata.append("trendingproduct", values.trendingproduct);
          formdata.append("newarrivedproduct", values.newarrivedproduct);
          formdata.append("featuredproduct", values.featuredproduct);
          formdata.append("size", values.size);
          formdata.append("brand", values.brand);
          formdata.append("color", values.color);
          // formdata.append("attribute", JSON.stringify(values.attribute));
          // formdata.append("product_image1", values.product_image1);
          // formdata.append("product_image2", values.product_image2);
          // formdata.append("product_image3", values.product_image3);
          // formdata.append("product_image4", values.product_image4);
          if (values.product_image1 !== data.data.product_image1) {
            formdata.append("product_image1", values.product_image1);
          }
          if (values.product_image2 !== data.data.product_image2) {
            formdata.append("product_image2", values.product_image2);
          }
          if (values.product_image3 !== data.data.product_image3) {
            formdata.append("product_image3", values.product_image3);
          }
          if (values.product_image4 !== data.data.product_image4) {
            formdata.append("product_image4", values.product_image4);
          }
          ProductForm(formdata);
        }}
      >
        {({ values, errors, handleSubmit, touched, setFieldValue }) => (
          <Form autoComplete="off" onSubmit={handleSubmit}>
            {console.log("field values", values)}
            <div
              className="row bg-white pb-4 round"
              style={{
                border: "1px solid #E0E0E0",
                margin: "10px 0px",
                borderRadius: "3px",
                position: "relative",
              }}
            >
              <div className="col-md-6 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Product Name <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      type="text"
                      name="product_name"
                      className="form-control"
                      placeholder="Product Name"
                      value={values.product_name}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {apiresponse.name ? (
                      <p style={{ color: "red" }}>
                        {" "}
                        {apiresponse.name.message}{" "}
                      </p>
                    ) : (
                      ""
                    )}
                    {errors.product_name && touched.product_name ? (
                      <p style={{ color: "red" }}>{errors.product_name}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Product Url <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="product_url"
                      type="text"
                      className="form-control"
                      placeholder="Product Url"
                      value={values.product_url}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {apiresponse.url ? (
                      <p style={{ color: "red" }}>
                        {" "}
                        {apiresponse.url.message}{" "}
                      </p>
                    ) : (
                      ""
                    )}

                    {errors.product_url && touched.product_url ? (
                      <p style={{ color: "red" }}>{errors.product_url}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Meta Title <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="meta_title"
                      type="text"
                      className="form-control"
                      placeholder="Meta Title"
                      value={values.meta_title}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.meta_title && touched.meta_title ? (
                      <p style={{ color: "red" }}>{errors.meta_title}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Meta Keywords <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="meta_keywords"
                      type="text"
                      className="form-control"
                      placeholder="Meta Keywords"
                      value={values.meta_keywords}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.meta_keywords && touched.meta_keywords ? (
                      <p style={{ color: "red" }}>{errors.meta_keywords}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      Meta Description <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="meta_description"
                      type="text"
                      className="form-control"
                      placeholder="Meta Description"
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.meta_description && touched.meta_description ? (
                      <p style={{ color: "red" }}>{errors.meta_description}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Product Status <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field as="select" name="status" className="form-select">
                      <option value="" disabled>
                        Select Status
                      </option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </Field>
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.status && touched.status ? (
                      <p style={{ color: "red" }}>{errors.status}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-12 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-2">
                    <label htmlFor="" className="form-label ">
                      Parent Category <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-10">
                    {getlevelonecategory?.data?.data ? (
                      <Multiselect
                        // isObject={false}
                        selectedValues={data.parentcategory}
                        options={getlevelonecategory?.data?.data}
                        onSelect={(selectedList) => {
                          setFieldValue(
                            "parent_category",
                            selectedList.map((item) => item._id)
                          );
                          FetchsubCategorys(
                            selectedList.map((item) => item._id)
                          );
                          setcategoryid(selectedList.map((item) => item._id));
                        }}
                        onRemove={(selectedList) => {
                          setFieldValue(
                            "parent_category",
                            selectedList.map((item) => item.id)
                          );
                          FetchsubCategorys(
                            selectedList.map((item) => item._id)
                          );
                          setcategoryid(selectedList.map((item) => item._id));
                        }}
                        displayValue="name"
                        maxSelectedValues={1}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="offset-lg-2 col-lg-10">
                    {errors.parent_category && touched.parent_category ? (
                      <p style={{ color: "red" }}>{errors.parent_category}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-12 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-2">
                    <label htmlFor="" className="form-label ">
                      Child Category <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-10">
                    {getlevelonecategory?.data?.data ? (
                      <Multiselect
                        // isObject={false}
                        selectedValues={data.childcategory}
                        options={subcategories}
                        onSelect={(selectedList) => {
                          setFieldValue(
                            "child_category",
                            selectedList.map((item) => item._id)
                          );
                          setsubcategoryid(
                            selectedList.map((item) => item._id)
                          );
                        }}
                        onRemove={(selectedList) => {
                          setFieldValue(
                            "child_category",
                            selectedList.map((item) => item.id)
                          );
                          setsubcategoryid(
                            selectedList.map((item) => item._id)
                          );
                        }}
                        displayValue="name"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="offset-lg-2 col-lg-10">
                    {errors.child_category && touched.child_category ? (
                      <p style={{ color: "red" }}>{errors.child_category}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-3 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label ">
                      Image 1 <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <div className="border d-flex justify-content-center">
                      <button
                        type="button"
                        style={{
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <input
                          type="file"
                          name="product_image1"
                          style={{ display: "none" }}
                          ref={imageInputRef1}
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "product_image1",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <img
                          src={
                            values.product_image1 == data.data.product_image1
                              ? `http://localhost:8000/uploads/images/${data.data.product_image1}`
                              : URL.createObjectURL(values.product_image1)
                          }
                          alt="zxcvbnm"
                          width="100%"
                          height="200px"
                          onClick={() => {
                            imageInputRef1.current.click();
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {errors.product_image1 && touched.product_image1 ? (
                      <p style={{ color: "red" }}>{errors.product_image1}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-3 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label ">
                      Image 2 <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <div className="border d-flex justify-content-center">
                      <button
                        type="button"
                        style={{
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <input
                          type="file"
                          name="product_image2"
                          style={{ display: "none" }}
                          ref={imageInputRef2}
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "product_image2",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <img
                          src={
                            values.product_image2 == data.data.product_image2
                              ? `http://localhost:8000/uploads/images/${data.data.product_image2}`
                              : URL.createObjectURL(values.product_image2)
                          }
                          alt="zxcvbnm"
                          width="100%"
                          height="200px"
                          onClick={() => {
                            imageInputRef2.current.click();
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {errors.product_image2 && touched.product_image2 ? (
                      <p style={{ color: "red" }}>{errors.product_image2}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-3 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label ">
                      Image 3 <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <div className="border d-flex justify-content-center">
                      <button
                        type="button"
                        style={{
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <input
                          type="file"
                          name="product_image3"
                          style={{ display: "none" }}
                          ref={imageInputRef3}
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "product_image3",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <img
                          src={
                            values.product_image3 == data.data.product_image3
                              ? `http://localhost:8000/uploads/images/${data.data.product_image3}`
                              : URL.createObjectURL(values.product_image3)
                          }
                          alt="zxcvbnm"
                          width="100%"
                          height="200px"
                          onClick={() => {
                            imageInputRef3.current.click();
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {errors.product_image3 && touched.product_image3 ? (
                      <p style={{ color: "red" }}>{errors.product_image3}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-3 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label ">
                      Image 4 <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <div className="border d-flex justify-content-center">
                      <button
                        type="button"
                        style={{
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <input
                          type="file"
                          name="product_image4"
                          style={{ display: "none" }}
                          ref={imageInputRef4}
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "product_image4",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <img
                          src={
                            values.product_image4 == data.data.product_image4
                              ? `http://localhost:8000/uploads/images/${data.data.product_image4}`
                              : URL.createObjectURL(values.product_image4)
                          }
                          alt="zxcvbnm"
                          width="100%"
                          height="200px"
                          onClick={() => {
                            imageInputRef4.current.click();
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {errors.product_image4 && touched.product_image4 ? (
                      <p style={{ color: "red" }}>{errors.product_image4}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-4 px-2 pt-3">
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="" className="form-label">
                      Trending Product <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-12">
                    <Field
                      as="select"
                      name="trendingproduct"
                      className="form-select"
                    >
                      <option value="" disabled>
                        Select Status
                      </option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </Field>
                  </div>
                  <div className="col-12">
                    {errors.trendingproduct && touched.trendingproduct ? (
                      <p style={{ color: "red" }}>{errors.trendingproduct}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-4 px-2 pt-3">
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="" className="form-label">
                      New Arrived Product{" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-12">
                    <Field
                      as="select"
                      name="newarrivedproduct"
                      className="form-select"
                    >
                      <option value="" disabled>
                        Select Status
                      </option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </Field>
                  </div>
                  <div className="col-12">
                    {errors.newarrivedproduct && touched.newarrivedproduct ? (
                      <p style={{ color: "red" }}>{errors.newarrivedproduct}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-4 px-2 pt-3">
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="" className="form-label">
                      Featured Product <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-12">
                    <Field
                      as="select"
                      name="featuredproduct"
                      className="form-select"
                    >
                      <option value="" disabled>
                        Select Status
                      </option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </Field>
                  </div>
                  <div className=" col-12">
                    {errors.featuredproduct && touched.featuredproduct ? (
                      <p style={{ color: "red" }}>{errors.featuredproduct}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div style={{ width: "19.866667%" }} className="col-2 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label">
                      MRP Price <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <Field
                      name="mrp_price"
                      type="number"
                      className="form-control"
                      placeholder="MRP Price"
                      value={values.mrp_price}
                    />
                  </div>
                  <div className="col-12">
                    {errors.mrp_price && touched.mrp_price ? (
                      <p style={{ color: "red" }}>{errors.mrp_price}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div style={{ width: "19.866667%" }} className="col-2 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label">
                      Selling Price <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <Field
                      name="selling_price"
                      type="number"
                      className="form-control"
                      placeholder="Selling Price"
                      value={values.selling_price}
                    />
                  </div>
                  <div className="col-12">
                    {errors.selling_price && touched.selling_price ? (
                      <p style={{ color: "red" }}>{errors.selling_price}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div style={{ width: "19.866667%" }} className="col-2 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label">
                      Stock <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <Field
                      name="stock"
                      type="number"
                      className="form-control"
                      placeholder="stock"
                      value={values.stock}
                    />
                  </div>
                  <div className="col-12">
                    {errors.stock && touched.stock ? (
                      <p style={{ color: "red" }}>{errors.stock}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div style={{ width: "19.866667%" }} className="col-2 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label">
                      Weight <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <Field
                      name="weight"
                      type="number"
                      className="form-control"
                      placeholder="Weight"
                      value={values.weight}
                    />
                  </div>
                  <div className="col-12">
                    {errors.weight && touched.weight ? (
                      <p style={{ color: "red" }}>{errors.weight}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div style={{ width: "19.866667%" }} className="col-2 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label">
                      Weight Type <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <Field
                      name="weight_type"
                      type="text"
                      className="form-control"
                      placeholder="Weight Type"
                      value={values.weight_type}
                    />
                  </div>
                  <div className="col-12">
                    {errors.weight_type && touched.weight_type ? (
                      <p style={{ color: "red" }}>{errors.weight_type}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div style={{width:"19.866667%"}} className="col-2 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label">
                    Brand <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <Field
                      name="brand"
                      type="text"
                      className="form-control"
                      placeholder="Brand"
                      value={values.brand}
                    />
                  </div>
                  <div className="col-12">
                    {errors.brand && touched.brand ? (
                      <p style={{ color: "red" }}>{errors.brand}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div style={{width:"19.866667%"}} className="col-2 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label">
                    Color <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <Field
                      name="color"
                      type="text"
                      className="form-control"
                      placeholder="Color"
                      value={values.color}
                    />
                  </div>
                  <div className="col-12">
                    {errors.color && touched.color ? (
                      <p style={{ color: "red" }}>{errors.color}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div style={{width:"19.866667%"}} className="col-2 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label">
                    Size <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <Field
                      name="size"
                      type="text"
                      className="form-control"
                      placeholder="size"
                      value={values.size}
                    />
                  </div>
                  <div className="col-12">
                    {errors.size && touched.size ? (
                      <p style={{ color: "red" }}>{errors.size}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-12 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label ">
                      Sort Description <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="sort_description"
                      className="form-control"
                      style={{ width: "100%", height: "100px" }}
                      value={values.sort_description}
                      onChange={(event) => {
                        setFieldValue("sort_description", event.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-12">
                    {errors.sort_description && touched.sort_description ? (
                      <p style={{ color: "red" }}>{errors.sort_description}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-12 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label ">
                      Product Description{" "}
                      <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <JoditEditor
                      config={config}
                      value={values.editor}
                      onChange={(content) => setFieldValue("editor", content)}
                    />
                  </div>
                  <div className="col-lg-12">
                    {errors.editor && touched.editor ? (
                      <p style={{ color: "red" }}>{errors.editor}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div
                className="col-12 py-5 px-4 d-flex justify-content-end"
                style={{ gap: "4px" }}
              >
                <button className="btn4">Cancel</button>
                <button
                  type="submit"
                  className="btn5"
                  style={{ background: "#0e5da9" }}
                >
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="row">
        <div className="col-12 py-2">
          <h2 style={{fontWeight:'bold'}}>Create Variant</h2>
        </div>
        <div className="col-3">
          <NavLink to={`/addvariant/${id}`}>
            <div class="card">
              <div class="header">
                <div class="image d-flex justify-content-center align-items-center">
                  <IoAddCircle size={70} color="white" />
                </div>
                {/* <div class="date">
				<span>6 min ago</span>
			</div> */}
              </div>
              {/* <div class="info">
			<a rel="noopener noreferrer" href="#" class="block">
				<span class="title">Facere ipsa nulla corrupti praesentium </span>
			</a>
			<p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit ...</p>
		</div> */}
            </div>
          </NavLink>
        </div>
        {variantdata.data.map((item, index) => (
          <div className="col-3">
            <NavLink to={`/editvariant/${item._id}`}>
            <div class="card2">
            <img
                          src={`http://localhost:8000/uploads/images/${item.product_image1}`}
                          alt="zxcvbnm"
                          width="100%"
                          height="100%"
                          style={{ cursor: "pointer" }}
                        />
              <div class="card__content">
                <p class="card__title" style={{textTransform:'capitalize',fontSize:'21px'}}>{item.product_name}</p>
                <p class="card__description" style={{color:'black'}}>₹{item.selling_price} <span style={{textDecoration:'line-through',fontSize:'11px'}}>₹{item.mrp_price}</span></p>
                <p class="card__description" style={{fontSize:'13px'}}>{item.sort_description}</p>
              </div>
            </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditProductform;
