import React, { useRef, useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { Field, Form, Formik } from "formik";
import img3 from "../../../assets/selectbanner.webp";
import { Brandvalidation } from "../Validation/Brandvalidation";
import { usePostBannerMutation } from "../../../store/api/bannerapi";
import { useGetAllBrandNameQuery, usePostBrandMutation } from "../../../store/api/brandapi";
const Addbrandform = () => {
  const imageInputRef = useRef(null);
  const nvg = useNavigate();


  const config = {
    height: "300px",
  };

  // create category api start here
  const {data:brandname,isLoading:brandnameloading} = useGetAllBrandNameQuery()
  console.log("brandname",brandname)
  const [postbrand] = usePostBrandMutation();

  const BrandForm = async (value) => {
    try {
      const response = await postbrand(value);
      if (!response.error) {
        if (response.data.status == "successfull") {
          nvg("/brandlist/1");
          window.location.reload();
        }
      } else {
        
      }
    } catch (error) {}
  };
  // create category api end here
  return (
    <div className="container-fuild pb-4 pt-3 px-2 bg-white">
      <Formik
        initialValues={{
          brand_name: "",
          description: "",
          status: "",
          banner: null,
        }}
        validationSchema={Brandvalidation}
        onSubmit={(values) => {
          const formdata = new FormData();
          formdata.append("description", values.description);
          formdata.append("status", values.status);
          formdata.append("brand_name", values.brand_name);
          formdata.append("brand_image", values.banner);
          BrandForm(formdata);
        }}
      >
        {({ values, errors, handleSubmit, touched, setFieldValue }) => (
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <div
              className="row bg-white pb-4 round"
              style={{
                border: "1px solid #E0E0E0",
                margin: "10px 0px",
                borderRadius: "3px",
                position: "relative",
              }}
            >
          
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Brand Name<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field as="select" name="brand_name" className="form-select">
                      <option value="" disabled>
                        Select Brand
                      </option>
                      {brandnameloading == true ? "" : brandname.data.map((item)=>(
                      <option value={item}>{item}</option>
                      ))}
                      {/* <option value="Slider">Slider</option> */}
                    </Field>
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.brand_name && touched.brand_name ? (
                      <p style={{ color: "red" }}>{errors.brand_name}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Banner Status <span style={{ color: "red" }}>*</span>
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
            


              <div className="col-12 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label ">
                      Image <span style={{ color: "red" }}>*</span>{" "}
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
                          name="banner"
                          style={{ display: "none" }}
                          ref={imageInputRef}
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "banner",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <img
                          src={
                            values.banner == null
                              ? img3
                              : URL.createObjectURL(values.banner)
                          }
                          alt="zxcvbnm"
                          width="100%"
                          height="200px"
                          onClick={() => {
                            imageInputRef.current.click();
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {errors.banner && touched.banner ? (
                      <p style={{ color: "red" }}>{errors.banner}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-12 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label ">
                      Brand Description{" "}
                      <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <JoditEditor
                      config={config}
                      value={values.description}
                      onChange={(content) => setFieldValue("description", content)}
                    />
                  </div>
                  <div className="col-lg-12">
                    {errors.description && touched.description ? (
                      <p style={{ color: "red" }}>{errors.description}</p>
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
  );
};

export default Addbrandform;
