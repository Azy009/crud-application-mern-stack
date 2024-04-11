import React, { useRef, useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { Field, Form, Formik } from "formik";
import img3 from "../../../assets/selectbanner.webp";
import { Bannervalidation } from "../Validation/Bannervalidation";
import { usePostBannerMutation } from "../../../store/api/bannerapi";
const Addbannerform = () => {
  const imageInputRef = useRef(null);
  const nvg = useNavigate();


  const config = {
    height: "300px",
  };

  // create category api start here
  const [postbanner] = usePostBannerMutation();

  const BannerForm = async (value) => {
    try {
      const response = await postbanner(value);
      if (!response.error) {
        if (response.data.status == "successfull") {
          nvg("/bannerlist/1");
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
          banner_name: "",
          banner_alt: "",
          banner_link: "",
          banner_type: "",
          description: "",
          status: "",
          banner: null,
        }}
        validationSchema={Bannervalidation}
        onSubmit={(values) => {
          const formdata = new FormData();
          formdata.append("banner_name", values.banner_name);
          formdata.append("banner_alt", values.banner_alt);
          formdata.append("banner_link", values.banner_link);
          formdata.append("description", values.description);
          formdata.append("status", values.status);
          formdata.append("banner_type", values.banner_type);
          formdata.append("banner", values.banner);
          BannerForm(formdata);
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
              <div className="col-md-6 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Banner Name <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      type="text"
                      name="banner_name"
                      className="form-control"
                      placeholder="Banner Name"
                      value={values.banner_name}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.banner_name && touched.banner_name ? (
                      <p style={{ color: "red" }}>{errors.banner_name}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Banner alt <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="banner_alt"
                      type="text"
                      className="form-control"
                      placeholder="Banner Alt"
                      value={values.banner_alt}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">

                    {errors.banner_alt && touched.banner_alt ? (
                      <p style={{ color: "red" }}>{errors.banner_alt}</p>
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
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Banner Type<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field as="select" name="banner_type" className="form-select">
                      <option value="" disabled>
                        Select Type
                      </option>
                      <option value="Banner">Banner</option>
                      <option value="Slider">Slider</option>
                    </Field>
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.banner_type && touched.banner_type ? (
                      <p style={{ color: "red" }}>{errors.banner_type}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-12 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label">
                      Banner Link <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <Field
                      name="banner_link"
                      type="text"
                      className="form-control"
                      placeholder="Banner Link"
                      value={values.banner_link}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">

                    {errors.banner_link && touched.banner_link ? (
                      <p style={{ color: "red" }}>{errors.banner_link}</p>
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
                      Banner Description{" "}
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

export default Addbannerform;
