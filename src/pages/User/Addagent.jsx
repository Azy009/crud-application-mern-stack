import React, { useRef, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Loadercomp from "../../components/Loadercomp";
import Multiselect from "multiselect-react-dropdown";
import JoditEditor from "jodit-react";
import { Field, Form, Formik } from "formik";
import img3 from "../../assets/selectbanner.webp";
import { Categoryvalidation } from "./Validation/Categoryvalidation";

const Addagent = () => {
  const [srtloader, setsrtloader] = useState(false);
  const [renderbanner, setrenderbanner] = useState(null);
  const imageInputRef = useRef(null);
  const [options, setoptions] = useState(["phone", "laptop", "tv"]);
  const config = {
    height: "300px",
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="dashboardcontent px-2">
        <div className="container-fuild px-2 desgin1">
          <div className="row bg-white ">
            <div
              className="col-lg-12 d-flex justify-content-between py-2"
              style={{
                background: "hsla(210, 85%, 32%, 0.2)",
                color: "#0C5398",
              }}
            >
              <p className="m-0 customfont">Add Agent</p>
              <div className="addnew d-block mb-2">
                <button className="btn text-white closebtn">
                  <NavLink
                    to="/agentlist/0"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    x Close
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        {srtloader == true ? (
          <div className="container-fuild bg-white">
            {" "}
            <div
              className="col-12 d-flex justify-content-center"
              style={{ gap: "4px", position: "absolute", width: "100%" }}
            >
              <div className="px-2">
                {" "}
                <Loadercomp size={100} />
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fuild pb-4 pt-3 px-2 bg-white">
            <Formik
              initialValues={{
                category_name: "",
                category_url: "",
                meta_keywords: "",
                meta_title: "",
                meta_description: "",
                editor: "",
                parent_category: [],
                status: "",
                category_image: null,
              }}
              validationSchema={Categoryvalidation}
              onSubmit={(values) => {
                console.log("Form values:", values);
              }}
            >
              {({
                values,
                errors,
                handleSubmit,
                touched,
                setFieldValue,
              }) => (
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  {console.log("wertyu", errors)}
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
                            Category Name{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                        </div>
                        <div className="col-lg-8">

                          <Field
                            type="text"
                            name="category_name"
                            className="form-control"
                            placeholder="Category Name"
                            value={values.category_name}
                          />
                        </div>
                        <div className="offset-lg-4 col-lg-8">
                          {errors.category_name && touched.category_name ? (
                            <p style={{ color: "red" }}>
                              {errors.category_name}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 px-2 pt-4">
                      <div className="row">
                        <div className="col-lg-4">
                          <label htmlFor="" className="form-label">
                            Category Url <span style={{ color: "red" }}>*</span>
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <Field
                            name="category_url"
                            type="text"
                            className="form-control"
                            placeholder="Category Url"
                            value={values.category_url}
                          />
                        </div>
                        <div className="offset-lg-4 col-lg-8">
                          {errors.category_url && touched.category_url ? (
                            <p style={{ color: "red" }}>
                              {errors.category_url}
                            </p>
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
                            Meta Keywords{" "}
                            <span style={{ color: "red" }}>*</span>{" "}
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
                            <p style={{ color: "red" }}>
                              {errors.meta_keywords}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 px-2 pt-3">
                      <div className="row">
                        <div className="col-lg-4">
                          <label htmlFor="" className="form-label ">
                            Meta Description{" "}
                            <span style={{ color: "red" }}>*</span>{" "}
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
                          {errors.meta_description &&
                          touched.meta_description ? (
                            <p style={{ color: "red" }}>
                              {errors.meta_description}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 px-2 pt-3">
                      <div className="row">
                        <div className="col-lg-4">
                          <label htmlFor="" className="form-label">
                            Category Status{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <Field
                            as="select"
                            name="status"
                            className="form-select"
                          >
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
                            Parent Category{" "}
                            <span style={{ color: "red" }}>*</span>{" "}
                          </label>
                        </div>
                        <div className="col-lg-10">
                          <Multiselect
                            isObject={false}
                            options={options}
                            onSelect={(selectedList) => {
                              setFieldValue("parent_category", selectedList);
                            }}
                            onRemove={(selectedList) => {
                              setFieldValue("parent_category", selectedList);
                            }}
                          />
                        </div>
                        <div className="offset-lg-2 col-lg-10">
                          {errors.parent_category && touched.parent_category ? (
                            <p style={{ color: "red" }}>
                              {errors.parent_category}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="col-12 pt-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <label htmlFor="" className="form-label ">
                            Category Banner{" "}
                            <span style={{ color: "red" }}>*</span>{" "}
                          </label>
                        </div>
                        <div className="col-12">
                          <div className="border d-flex justify-content-center">
                            <button
                              type="button"
                              style={{ border: "none", outline: "none",width:renderbanner !== null ? '100%' : '' }}
                            >
                              <input
                                type="file"
                                name="category_image"
                                style={{ display: "none" }}
                                ref={imageInputRef}
                                accept="image/*"
                                s
                                onChange={(event) => {
                                  setFieldValue(
                                    "category_image",
                                    event.currentTarget.files[0]
                                  );
                                }}
                              />
                              <img
                                src={values.category_image == null ? img3 : URL.createObjectURL(values.category_image)}
                                alt="zxcvbnm"
                                width="100%"
                                height="200px"
                                onClick={()=>{imageInputRef.current.click()}}
                                style={{ cursor: "pointer" }}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          {errors.category_image && touched.category_image ? (
                            <p style={{ color: "red" }}>
                              {errors.category_image}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="col-12 px-2 pt-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <label htmlFor="" className="form-label ">
                            Category Description{" "}
                            <span style={{ color: "red" }}>*</span>{" "}
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <JoditEditor
                            config={config}
                            value={values.editor}
                            onChange={(content) =>
                              setFieldValue("editor", content)
                            }
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Addagent;
