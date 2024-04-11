import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Loadercomp from "../../../components/Loadercomp";
import { AiOutlineDelete } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import { useDeleteBrandMutation, useGetAllBrandQuery } from "../../../store/api/brandapi";

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [isdelete, setisdelete] = useState(0);

  // data grid setting start here
  const colums = [
    {
      field: "serialNo",
      headerName: "S.No",
      headerAlign: "center",
      align: "center",
      flex: 0.3,
    },
    {
      field: "brand_name",
      headerName: "Banner Name",
      headerAlign: "center",
      align: "center",
      flex: 0.6,
    },
    { field: "formatdate", headerName: "Created Date & Time", flex: 0.8 },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      flex: 0.4,
      renderCell: ({ row: { status } }) => {
        return (
          <button
            className={
              status == "Active"
                ? "btn btn-success custombtn12 custombtn122"
                : "btn btn-danger custombtn12 custombtn121"
            }
          >
            {status == "Active" ? "Active" : "Inactive"}
          </button>
        );
      },
    },
    {
      field: "_id",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      flex: 0.8,
      renderCell: ({ row: { _id } }) => {
        return (
          <div>
            <NavLink
              to="#"
              onClick={() => {
                setisdelete(_id);
              }}
            >
              <AiOutlineDelete
                style={{ paddingRight: "5px" }}
                fontSize={22}
                color="#0C5398"
              />
            </NavLink>
            <NavLink to={`/editbrand/${_id}`}>
              <BiEdit fontSize={16} color="#0C5398" />
            </NavLink>
          </div>
        );
      },
    },
  ];
  // data grid setting end here

  // delete category record start here
  const [deletereord] = useDeleteBrandMutation();
  const deletecategory = () => {
    const response = deletereord(isdelete);
    setisdelete(0);
    window.location.reload();
  };
  // delete category record end here

  
  // fetch all category api start here
  const { data: brandData, isLoading } = useGetAllBrandQuery();
  useEffect(() => {
    if (brandData) {
      async function fetchData() {
        setloading(true);
        try {
          const dataWithSerialNumbers = brandData.data.map((row, index) => ({
            ...row,
            serialNo: index + 1,
            id: index + 1,
            formatdate:new Date(row.createdAt.split('Time')[0]).toLocaleDateString('en-GB', {
              hour: 'numeric',
              minute: 'numeric'
            })
          }));
          setData(dataWithSerialNumbers);
          setloading(false);
        } catch (error) {
          setloading(false);
        }
      }
      fetchData();
    }
  }, [brandData]);
  // fetch all category api start here

  return (
    <div
      className="row bg-white pb-4 rounded-bottom table-responsive"
      style={{ paddingBottom: "7rem" }}
    >
      {loading ? (
        <div style={{ textAlign: "center", fontWeight: "700" }}>
          <Loadercomp size={100} />
        </div>
      ) : (
        <DataGrid
          columns={colums}
          rows={data}
          density="compact"
          pageSizeOptions={[10, 20, 30, 50, 100]}
          components={{ Toolbar: GridToolbar }}
        />
      )}
      <div
        className={isdelete !== 0 ? "modal fade show" : "modal fade"}
        style={{ display: isdelete !== 0 ? "block" : "none" }}
        id="exampleModal1400000"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <BsQuestionLg className="question-logo" />
            <div className="modal-header mod-line"></div>
            <div className="modal-body">
              <div className="row gy-3 mt-2">
                <h1 className="ccedit-h">Warning</h1>
                <p className="ccedit-p">
                  Do You Really Want to Delete This Reord
                </p>
              </div>
            </div>
            <div className="modal-footer mod-line m-auto">
              <button
                type="button"
                className="btn closebtn text-white"
                onClick={deletecategory}
              >
                Proceed
              </button>
              <button
                type="button"
                className="btn text-white"
                style={{ background: "grey" }}
                onClick={() => {
                  setisdelete(0);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
