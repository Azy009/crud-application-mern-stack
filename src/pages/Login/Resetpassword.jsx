import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loadercomp from "../../components/Loadercomp";

const Resetpassword = () => {
  const nvg = useNavigate();
  const [newpass, setnewpass] = useState();
  const [comfirmpass, setcomfirmpass] = useState();
  const [goodresponse, setgoodresponse] = useState({});
  const [badresponse, setbadresponse] = useState({});
  const [loading, setloading] = useState(false);
  const { id1, id2 } = useParams();
  async function submitform(e) {
    e.preventDefault();
    setloading(true);
    const formdata = new FormData();
    formdata.append("password", newpass);
    formdata.append("confirm_password", comfirmpass);
    try {
      let url = `${process.env.REACT_APP_API_URL}api/forgetpassword/${id1}/${id2}/`;
      const response = await axios.patch(url, formdata);
      console.log(response);
      setgoodresponse(response);
      setloading(false)
      nvg("/");

    } catch (error) {
      setbadresponse(error.response.data);
      setloading(false)
    }
  }
  return (
    <>
      <div className="container-fluid d-flex flex-column reset-card bg-body">
        <div className="row align-items-center justify-content-center min-vh-100 g-0">
          <div className="col-12 col-md-8 col-lg-4 border-3 ">
            <div className="card shadow-sm" style={{ width: "436px" }}>
              <div className="card-body">
                <div className="mb-4">
                  <h5 className="reset-head">Reset Password</h5>
                  <p className="reset-p">Enter your new password below</p>
                </div>
                <form onSubmit={submitform}>
                  <div
                    className="row mb-3"
                    style={{ justifyContent: "center" }}
                  >
                    <div className="col-lg-10 col-md-10 col-12 offset-lg-0">
                      <input
                        type="text"
                        className="form-control customheight mb-3"
                        required
                        placeholder="New Password"
                        value={newpass}
                        onChange={(e) => {
                          setnewpass(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-lg-10 col-md-10 col-12 offset-lg-0">
                      <input
                        type="text"
                        className="form-control customheight mb-3"
                        required
                        placeholder="Confirm New Password"
                        value={comfirmpass}
                        onChange={(e) => {
                          setcomfirmpass(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-center" style={{gap:'4px' , position:'absolute',width:"91%",zIndex:"3"}}>
        <div className='px-2'>{loading == true ?  <Loadercomp size={100} /> : ""}</div>
        </div>
                    <div className="col-lg-10 col-md-10 col-12 offset-lg-0">
                    {badresponse.non_field_errors ? (
                    <div class="alert alert-danger" role="alert">
                      {badresponse.non_field_errors}
                    </div>
                  ) : (
                    ""
                  )}
                  {goodresponse.status == 200 ? (
                    <div class="alert alert-success" role="alert">
                      Password Change Successfully
                    </div>
                  ) : (
                    ""
                  )}
                    </div>
                  </div>
                 
                  <div className="mb-3 d-grid">
                    <button type="submit" className="btn7 ">
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
