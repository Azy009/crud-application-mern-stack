import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BsFillEyeFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { gettoken } from "../../Localstorage/Store";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css';
import 'datatables.net-buttons/js/dataTables.buttons.min.js';
import 'datatables.net-buttons/js/buttons.html5.min.js';
import 'datatables.net-buttons/js/buttons.print.min.js';
import 'datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js';
const Cagentlist = () => {
  const [data, setData] = useState([]);
  const [idno, setidno] = useState(0);
  const [loading, setloading] = useState(true);
  const divRef = useRef(null)
  const curtable = useRef()
  const gettokinval = gettoken()
  const {id} = useParams()
   
  useEffect(() => {
    setidno(id)
    function showAlert() {
      setTimeout(function() {
       setidno(0)
      }, 5000); // 5000 milliseconds (5 seconds) delay
    }
    showAlert()
    divRef.current.classList.remove('dataTable');
    async function fetchData() {
      const config = {
        headers: {
          Authorization: `Bearer ${gettokinval.access}`,
        },
      };
    let url = `${process.env.REACT_APP_API_URL}api/agent_checking/`;
      try {
        const response = await axios.get(url, config);
        console.log(response.data);
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
      } catch (error) {
        console.error(error);
        setloading(false)
      }
    }
    fetchData();

  }, [divRef]);
  // useEffect(() => {
  
  // }, []);
  // const handleChangePageLength = (event) => {
  //   const newPageLength = event.target.value;
  //   $("#myTable").DataTable().page.len(newPageLength).draw();
  // };
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
       {idno == 2 ? <div className="col-12 alert alert-success mt-3" role="alert">
            <h5 style={{padding:'0px',margin:"0px"}}>
          Something Went Wrong Try Again
            </h5>
       </div> : <div></div>}
            <div className="col-lg-3 d-flex justify-content-between">
              <p className="m-0 customfont">Agent List</p>
              <div className="addnew d-lg-none d-block mb-2">
                <button className="btn text-white customcolor2"><NavLink to='/addremittance' style={{textDecoration:'none',color:'white'}}> + Add New</NavLink></button>
              </div>
            </div>
            <div
              className="col-lg-9 d-flex justify-content-end align-items-center">
              {/* <div className="searchinput">
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              </div> */}
              {/* <div className="addnew d-lg-block d-none">
                <button className="btn text-white customcolor2"><NavLink to='/addagent' style={{textDecoration:'none',color:'white'}}> + Add New</NavLink></button>
              </div> */}
            </div>
          </div>
          {/* <label htmlFor="pageLengthSelect">Rows per page:</label>
         <select id="pageLengthSelect" onChange={handleChangePageLength}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select> */}
          
          <div className="row bg-white pb-4 rounded-bottom table-responsive" style={{paddingBottom:"7rem"}}>
          <table id={loading ? "MYTAB" : "myTable"} ref={divRef} className="table">
  <thead className="table-light">
  <tr>
      <th scope="col"></th>
      <th scope="col">S.NO</th>
      <th scope="col">Action</th>
      <th scope="col">Username</th>
      {/* <th scope="col">First Name</th> */}
      <th scope="col">Mobile No.</th>
      <th scope="col">State</th>
      <th scope="col">Status</th>
      <th scope="col">Created By</th>
      <th scope="col">Created Date & Time</th>

    </tr>
  </thead>
  <tbody>

  {loading ? <tr><td style={{textAlign:"center",fontWeight:"700"}} colSpan={9}>Loading...</td></tr> : data.map((item,index) => (
              <tr key={item.id} >
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /></td>
              <td scope="row">{index + 1}</td>
              <td>
                    <NavLink to={`/checkagentdetail/${item.id}`}>
                      <BsFillEyeFill
                        style={{ paddingRight: "5px" }}
                        fontSize={21}
                        color="#0C5398"
                      />
                    </NavLink>
                    <NavLink to={`/checkeditagent/${item.id}`}>
                      <BiEdit fontSize={16} color="#0C5398" />
                    </NavLink>
                  </td>
              <td>{item.username}</td>
              {/* <td>{item.first_name}</td> */}
              <td>{item.mobile_no}</td>
      <td><button className={item.stage == 'Created' ? "btn btn-danger created":"btn btn-danger"}>{item.stage}</button></td>
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

export default Cagentlist;
