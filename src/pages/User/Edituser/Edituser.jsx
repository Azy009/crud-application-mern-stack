import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useParams } from "react-router-dom";

import Edituserform from "./Edituserform";

const Edituser = () => {
  const {id} = useParams()
  
  return (
    <div style={{ width: "100%" }}>
      <div className="dashboardcontent px-2">
        <div className="container-fuild px-2 desgin1">
          <div className="row bg-white ">
            <div
              className="col-lg-12 d-flex justify-content-between py-2"
              style={{
                background: "#bcdae9",
                color: "#0C5398",
              }}
            >
              <p className="m-0 customfont">Edit Customer</p>
              <div className="addnew d-block mb-2">
                <button className="btn text-white closebtn">
                  <NavLink
                    to="/0"
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
     <Edituserform id={id} />
      </div>
    </div>
  );
};

export default Edituser;
