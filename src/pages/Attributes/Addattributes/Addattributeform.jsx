import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Field, Form, Formik } from "formik";
import { Attributevalidation } from "../Validation/Attributevalidation";
import { useNavigate } from "react-router-dom";
import { usePostAttributeMutation } from "../../../store/api/attributeapi";
const Addattributeform = () => {
  const nvg = useNavigate();
  const [postAttribute] = usePostAttributeMutation();

  const AttributeForm = async (value, setFieldError) => {
    try {
      const response = await postAttribute(value);
      if (!response.error) {
        if (response.data.status == "successfull") {
          nvg("/attributelist/1");
          window.location.reload();
        }
      } else {
        if (response.error.data.error.attributeName?.message) {
          setFieldError(
            "attributeName",
            "Attribute Name is already Exist. Please use a different Attribute Name."
          );
        }
      }
    } catch (error) {}
  };
  return (
    <div className="container-fuild pb-4 pt-3 px-2 bg-white">
      <Formik
        initialValues={{
          attributeName: "",
          attributeValues: [],
        }}
        validationSchema={Attributevalidation}
        onSubmit={(values, { setFieldError }) => {
          const formdata = new FormData();
          formdata.append("attributeName", values.attributeName);
          formdata.append("attributeValues", values.attributeValues);
          AttributeForm(formdata, setFieldError);
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
                      Attribute Name <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      type="text"
                      name="attributeName"
                      className="form-control"
                      placeholder="Attribute Name"
                      value={values.attributeName}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.attributeName && touched.attributeName ? (
                      <p style={{ color: "red" }}>{errors.attributeName}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Attribute Value <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="attributeValues"
                      type="text"
                      className="form-control"
                      placeholder="Attribute Value"
                      onChange={(e) =>
                        setFieldValue(
                          "attributeValues",
                          e.target.value.split(",").map((value) => value.trim())
                        )
                      }
                      value={values.attributeValues.join(", ")}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.attributeValues && touched.attributeValues ? (
                      <p style={{ color: "red" }}>{errors.attributeValues}</p>
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

export default Addattributeform;
