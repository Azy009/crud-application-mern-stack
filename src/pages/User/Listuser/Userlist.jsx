import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Table from "./Table";
const Userlist = () => {
  const [idno, setidno] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    if(id){
    setidno(id);
    function showAlert() {
      setTimeout(function () {
        window.location.href = "/";
        setidno(0);
      }, 2500);
    }
    showAlert();
  }
  }, []);

  return (
    <div className="minheight d-flex justify-content-center mt-5" style={{ width: "100%", minHeight: "100vh" }}>
      <div className="dashboardcontent px-2" style={{ width: "75%", minHeight: "100vh" }}>
        <div className="container-fuild px-2 ">
          <div className="row bg-white py-3 rounded-top" style={{padding:'20px'}}>
            {idno == 1 ? (
              <div className="col-12 alert alert-success mt-3" role="alert">
                <h5 style={{ padding: "0px", margin: "0px" }}>
                  Successfully Added
                </h5>
              </div>
            ) : (
              <div></div>
            )}
            {idno == 2 ? (

              <div
                className="col-12 alert alert-success mt-3"
                role="alert"
              >
                <h5 style={{ padding: "0px", margin: "0px" }}>
                  Successfully Updated
                </h5>
              </div>
            ) : (
              <div></div>
            )}
            <div className="col-12">
      <h3 style={{textAlign:'center',color:'#006666',fontWeight:'600',textDecoration:'underline'}}>CRUD APPLICATION IN MERN STACK</h3>

            </div>
            <div className="col-lg-3 d-flex justify-content-between" style={{width:'100%'}}>
              <p className="m-0 customfont" style={{fontSize:'24px'}}>Customer List</p>
              <div className="addnew d-lg-flex d-block mb-2">
                <button className="btn text-white customcolor2">
                  <NavLink
                    to="/adduser"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    + Add New
                  </NavLink>
                </button>
              </div>
            </div>
          </div>

          <Table />
        </div>
      </div>
    </div>
  );
};

export default Userlist;
