import React, { useRef, useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import {
  useGetWebinfoQuery,
  usePatchWebinfoMutation,
} from "../../../store/api/webinfoapi";
import { Webinfovalidation } from "../Validation/Webinfovalidation";
const Webinfoform = () => {
  const { data, isLoading } = useGetWebinfoQuery();
  const imageInputRef = useRef(null);
  const [showstatus, setshowstatus] = useState(false);

  // Edit Webinfo api start here
  const [patchwebinfo] = usePatchWebinfoMutation();

  const WebinfoForm = async (value) => {
    try {
      const response = await patchwebinfo({ data: value });
      console.log("statu",response)
      if (!response.error) {
        if (response.data.status == "successfully update") {
          // nvg("/categorylist/2");
          setshowstatus(true);
          setTimeout(() => {
            setshowstatus(false);
          }, 5000);
          // window.location.reload();
        }
      } else {
        // setapiresponse(response.error.error);
      }
    } catch (error) {}
  };
  // Edit Webinfo api end here

  return isLoading == true ? (
    ""
  ) : (
    <div className="container-fuild pb-4 pt-3 px-2 bg-white">
      {showstatus == true ? (
              <div
                className="col-12 alert alert-success mt-3 ml-2"
                role="alert"
              >
                <h5 style={{ padding: "0px", margin: "0px" }}>
                  Successfully Updated
                </h5>
              </div>
            ) : (
              <div></div>
            )}
      <Formik
        initialValues={{
          website_name: data.data[0].website_name,
          mobile_no: data.data[0].mobile_no,
          address: data.data[0].address,
          email: data.data[0].email,
          facebook: data.data[0].facebook,
          instagram: data.data[0].instagram,
          twitter: data.data[0].twitter,
          youtube: data.data[0].youtube,
          pinterest: data.data[0].pinterest,
          gstno: data.data[0].gstno,
          logo: data.data[0].logo,
        }}
        validationSchema={Webinfovalidation}
        onSubmit={(values) => {
          const formdata = new FormData();
          formdata.append("website_name", values.website_name);
          formdata.append("mobile_no", values.mobile_no);
          formdata.append("address", values.address);
          formdata.append("email", values.email);
          formdata.append("gstno", values.gstno);
          formdata.append("facebook", values.facebook);
          formdata.append("instagram", values.instagram);
          formdata.append("youtube", values.youtube);
          formdata.append("twitter", values.twitter);
          formdata.append("pinterest", values.pinterest);
          if (values.logo !== data.data[0].logo) {
            formdata.append("logo", values.logo);
          }
          WebinfoForm(formdata);
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
                      Website Name <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      type="text"
                      name="website_name"
                      className="form-control"
                      placeholder="Website Name"
                      value={values.website_name}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.website_name && touched.website_name ? (
                      <p style={{ color: "red" }}>{errors.website_name}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Email<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={values.email}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.email && touched.email ? (
                      <p style={{ color: "red" }}>{errors.email}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Mobile No <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="mobile_no"
                      type="number"
                      className="form-control"
                      placeholder="Mobile No"
                      value={values.mobile_no}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.mobile_no && touched.mobile_no ? (
                      <p style={{ color: "red" }}>{errors.mobile_no}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      GST No <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="gstno"
                      type="text"
                      className="form-control"
                      placeholder="GST No"
                      value={values.gstno}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.gstno && touched.gstno ? (
                      <p style={{ color: "red" }}>{errors.gstno}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      Address <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="address"
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.address && touched.address ? (
                      <p style={{ color: "red" }}>{errors.address}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      Facebook <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="facebook"
                      type="text"
                      className="form-control"
                      placeholder="Facebook"
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.facebook && touched.facebook ? (
                      <p style={{ color: "red" }}>{errors.facebook}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      Instagram <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="instagram"
                      type="text"
                      className="form-control"
                      placeholder="Instagram"
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.instagram && touched.instagram ? (
                      <p style={{ color: "red" }}>{errors.instagram}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      Youtube <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="youtube"
                      type="text"
                      className="form-control"
                      placeholder="Youtube"
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.youtube && touched.youtube ? (
                      <p style={{ color: "red" }}>{errors.youtube}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      Twitter <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="twitter"
                      type="text"
                      className="form-control"
                      placeholder="Twitter"
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.twitter && touched.twitter ? (
                      <p style={{ color: "red" }}>{errors.twitter}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      Pinterest <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="pinterest"
                      type="text"
                      className="form-control"
                      placeholder="Pinterest"
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.pinterest && touched.pinterest ? (
                      <p style={{ color: "red" }}>{errors.pinterest}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-12 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label ">
                      Logo <span style={{ color: "red" }}>*</span>{" "}
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
                          name="logo"
                          style={{ display: "none" }}
                          ref={imageInputRef}
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue("logo", event.currentTarget.files[0]);
                          }}
                        />
                        <img
                          src={
                            values.logo == data.data[0].logo
                              ? `http://localhost:8000/uploads/images/${data.data[0].logo}`
                              : URL.createObjectURL(values.logo)
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
                    {errors.logo && touched.logo ? (
                      <p style={{ color: "red" }}>{errors.logo}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div
                className="col-12 py-5 px-4 d-flex justify-content-end"
                style={{ gap: "4px" }}
              >
                {/* <button className="btn4">Cancel</button> */}
                <button
                  type="submit"
                  className="btn5"
                  style={{ background: "#0e5da9" }}
                >
                  Update
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Webinfoform;
