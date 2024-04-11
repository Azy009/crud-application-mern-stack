import React from "react";
import img1 from "../../assets/loginlogo.png";
import img from "../../assets/forgetpic.png";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Loadercomp from "../../components/Loadercomp";

const Forgetpassword = () => {
  const [email, setemail] = useState();
  const [goodresponse, setgoodresponse] = useState({});
  const [badresponse, setbadresponse] = useState({});
  const [loading, setloading] = useState(false);
  async function submitform(e) {
    e.preventDefault();
    setloading(true)
    const formdata = new FormData();
    formdata.append("email", email);
    try {
      let url = `${process.env.REACT_APP_API_URL}api/forgetpassword/`;
      const response = await axios.post(url, formdata);
      setgoodresponse(response);
      setbadresponse({});
      setloading(false)
    } catch (error) {
      setbadresponse(error.response.data);
      setloading(false)
    }
  }

  return (
    <div className="container loginpage d-flex justify-content-between align-items-center bg-body">
      <div className="row">
        <div className="col-lg-6 lp-left px-lg-1 px-md-1">
          <div className="container px-lg-2 px-md-1">
            <div className="row mb-4">
              <div className="col-lg-7 col-8 offset-lg-0">
                <img src={img1} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-lg-10 col-md-10 col-12 offset-lg-0 offset-0">
                <h3 className="welcomeback2 mb-3">Forget </h3>
                <h3 className="welcomeback2 mb-3">Your Password ?</h3>
              </div>
              <div className="col-12 d-flex justify-content-center" style={{gap:'4px' , position:'absolute',width:"91%",zIndex:"3"}}>
        <div className='px-2'>{loading == true ?  <Loadercomp size={100} /> : ""}</div>
        </div>
            </div>
            <form onSubmit={submitform}>
              <div className="row">
                <div className="col-lg-10 col-md-10 col-12 offset-lg-0">
                  {badresponse.message ? (
                    <div class="alert alert-danger" role="alert">
                      {badresponse.message}
                    </div>
                  ) : (
                    ""
                  )}
                  {badresponse.email ? (
                    <div class="alert alert-danger" role="alert">
                      {badresponse.email}
                    </div>
                  ) : (
                    ""
                  )}
                  {goodresponse.status == 200 ? (
                    <div class="alert alert-success" role="alert">
                      Password reset link has been sent to your email account
                    </div>
                  ) : (
                    ""
                  )}

                  <input
                    type="text"
                    className="form-control forgetinput mb-3"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    required
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10 col-md-10 col-12 offset-lg-0">
               
                  <button type="submit" className="btn8">
                    Reset Password
                  </button>
                </div>
                <div className="col-lg-10 col-md-10 col-12 offset-lg-0 mt-4">
                  <div>
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                      <p className="text-center customdesgi">Back to login</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className=" col-6 lp-right isnone">
          <div className="">
            <img src={img} alt="mnbvc" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
