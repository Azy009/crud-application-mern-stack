import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BsFillEyeFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { NavLink, useParams } from "react-router-dom";
import $ from "jquery";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
// import "datatables.net-dt/js/dataTables.dataTables.min.js";
// import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css';
// import 'datatables.net-buttons/js/dataTables.buttons.min.js';
// import 'datatables.net-buttons/js/buttons.html5.min.js';
// import 'datatables.net-buttons/js/buttons.print.min.js';
// import 'datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js';
import axios from "axios";
import { gettoken } from "../../Localstorage/Store";

const Cremittancelist = () => {


  const [data, setData] = useState([]);
  const [idno, setidno] = useState(0);
  const [loading,setloading] = useState(true);
  const gettokinval = gettoken();
  const {id} = useParams()
  useEffect(() => {
    setidno(id)
    function showAlert() {
      setTimeout(function() {
       setidno(0)
      }, 5000); // 5000 milliseconds (5 seconds) delay
    }
    showAlert()
    async function fetchData() {
      const config = {
        headers: {
          Authorization: `Bearer ${gettokinval.access}`,
        },
      };
      let url = `${process.env.REACT_APP_API_URL}api/remittance_checking/`;
      const response = await axios.get(url, config);
      setData(response.data);
      setloading(false)
      $(document).ready(function () {
        $("#myTable").DataTable().destroy();
        $("#myTable").DataTable({
          pageLength: 10,
          language: {
            searchPlaceholder: 'Search...',
            sSearch: '',
          },
          dom: 'Bfrtip', // Add the buttons to the DataTable
          buttons: [
          // 'csv', 'excel', 'print'
          ]
        });
      });
    }
    fetchData();
  }, []);


  return (
    <div className="minheight" style={{ width: "100%",minHeight:'100vh' }}>
      {/* <Header /> */}
      <div className="dashboardcontent px-2">
        <div className="container-fuild px-2 ">
          <div className="row bg-white py-3 rounded-top">
          {idno == 1 ? <div className="col-12 alert alert-success mt-3" role="alert">
            <h5 style={{padding:'0px',margin:"0px"}}>
          Successfully Checked
            </h5>
       </div> : <div></div>}
       {idno == 2 ? <div className="col-12 alert alert-danger mt-3" role="alert">
            <h5 style={{padding:'0px',margin:"0px"}}>
          Something went wrong try again
            </h5>
       </div> : <div></div>}
            <div className="col-lg-3 d-flex justify-content-between">
              <p className="m-0 customfont">Remittance List</p>
              <div className="addnew d-lg-none d-block mb-2">
                <button className="btn text-white customcolor2"><NavLink to='/addremittance' style={{textDecoration:'none',color:'white',paddingBottom:'10rem',}}> + Add New</NavLink></button>
              </div>
            </div>
            <div className="col-lg-9 d-flex justify-content-end align-items-center"
              style={{ gap: "7px" }}
            >
              {/* <div className="searchinput">
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              </div> */}
              {/* <div className="addnew d-lg-block d-none">
                <button className="btn text-white customcolor2"><NavLink to='/addremittance' style={{textDecoration:'none',color:'white'}}> + Add New</NavLink></button>

              </div> */}
            </div>
          </div>
          <div className="row bg-white pb-4 rounded-bottom table-responsive">
          <table className="table"  id={loading ? "TAB" : "myTable"}>
  <thead className="table-light">
  <tr>
      <th scope="col"></th>
      <th scope="col">ID</th>
      <th scope="col">Action</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Product</th>
      <th scope="col">Transaction No.</th>
      {/* <th scope="col">Mobile No.</th> */}
      {/* <th scope="col">Aadhar No.</th> */}
      <th scope="col">State</th>
      <th scope="col">Status</th>
      <th scope="col">Created By</th>
      <th scope="col">Created Date & Time</th>

    </tr>
  </thead>
  <tbody>
  {loading ? <tr><td style={{textAlign:"center"}} colSpan={10}>Loading...</td></tr> : data.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                    </td>
                    <td scope="row">{index + 1}</td>
                    <td>
                      <NavLink to={`/checkremittancedetail/${item.id}`}>
                        <BsFillEyeFill
                          style={{ paddingRight: "5px" }}
                          fontSize={21}
                          color="#0C5398"
                        />
                      </NavLink>
                      <NavLink to={`/checkeditremittance/${item.id}`}>
                        <BiEdit fontSize={16} color="#0C5398" />
                      </NavLink>
                    </td>
                    <td>{`${item.customer_fname} ${item.customer_lname}`}</td>
                    <td>{item.product}</td>
                    <td>{item.transaction_no}</td>
                    {/* <td>Product 1</td> */}
                    <td><button className={item.stage == 'Created' ? "btn btn-danger created": item.stage == 'Checked' ? 'btn btn-success checked' : 'btn btn-success approved'}>{item.stage}</button></td>
      <td><button className={item.status == true ? "btn btn-success custombtn12 custombtn122" : "btn btn-danger custombtn12 custombtn121"}>{item.status == true ? "Active" : "Inactive"}</button></td>
              <td>{item.created_by}</td>
              <td>{item.created_at}</td>
                  </tr>
                ))}
  </tbody>
</table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cremittancelist;
