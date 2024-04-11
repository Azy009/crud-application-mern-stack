import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Table from "./Table";

const Orderlist = () => {
  const [idno, setidno] = useState(0);
  const { id } = useParams();

  // show response status start here
  useEffect(() => {
    setidno(id);
    function showAlert() {
      setTimeout(function () {
        setidno(0);
      }, 5000);
    }
    showAlert();
  }, []);
  // show response status end here
  return (
    <div className="minheight" style={{ width: "100%", minHeight: "100vh" }}>
      <div className="dashboardcontent px-2">
        <div className="container-fuild px-2 ">
          <div className="row bg-white py-3 rounded-top">
            {idno == 1 ? (
              <div className="col-11 alert alert-success mt-3 mx-3" role="alert">
                <h5 style={{ padding: "0px", margin: "0px" }}>
                  Successfully Added
                </h5>
              </div>
            ) : (
              <div></div>
            )}
            {idno == 2 ? (
              <div className="col-11 alert alert-success mt-3 mx-3" role="alert">
                <h5 style={{ padding: "0px", margin: "0px" }}>
                  Successfully Updated
                </h5>
              </div>
            ) : (
              <div></div>
            )}
            <div className="col-lg-3 d-flex justify-content-between">
              <p className="m-0 customfont">Order List</p>
              <div className="addnew d-lg-none d-block mb-2">
                <button className="btn text-white customcolor2">
                  {/* <NavLink
                    to="/addbanner"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    + Add New
                  </NavLink> */}
                </button>
              </div>
            </div>
            <div
              className="col-lg-9 d-flex justify-content-end align-items-center"
              style={{ gap: "7px" }}
            >
              <div className="addnew d-lg-block d-none">
                {/* <button className="btn text-white customcolor2">
                  <NavLink
                    to="/addbanner"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    + Add New
                  </NavLink>
                </button> */}
              </div>
            </div>
          </div>

          <Table />
        </div>
      </div>
    </div>
  );
};

export default Orderlist;
