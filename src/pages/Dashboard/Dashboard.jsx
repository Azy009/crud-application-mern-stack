import React from "react";
import Header from "../../components/Header";
import img1 from "../../assets/Ellipse 27.png";
import img2 from "../../assets/Ellipse 28.png";
import img3 from "../../assets/Ellipse 29.png";
import img4 from "../../assets/Western union.png";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  LabelList,
} from "recharts";
import Breadcupdash from "../../components/Breadcupdash";

const Dashboard = () => {
  const data = [
    {
      rank: 1,
      name: "ajay",
      number: 5,
    },
    {
      rank: 2,
      name: "fggfds",
      number: 24,
    },
    {
      rank: 3,
      name: "sdfg",
      number: 20,
    },
    {
      rank: 4,
      name: "kjhgfd",
      number: 5,
    },
    {
      rank: 5,
      name: "dfgh",
      number: 30,
    },
    {
      rank: 6,
      name: "sdfgh",
      number: 10,
    },
    {
      rank: 7,
      name: "asdfgh",
      number: 20,
    },
    {
      rank: 8,
      name: "sdf",
      number: 5,
    },
    {
      rank: 9,
      name: "sdfghjk",
      number: 14,
    },
    {
      rank: 10,
      name: "ajsdfghay",
      number: 1,
    },
    {
      rank: 11,
      name: "ajay",
      number: 7,
    },
    {
      rank: 12,
      name: "fggfds",
      number: 10,
    },
    {
      rank: 13,
      name: "sdfg",
      number: 8,
    },
    {
      rank: 14,
      name: "kjhgfd",
      number: 4,
    },
    {
      rank: 15,
      name: "dfgh",
      number: 4,
    },
    {
      rank: 16,
      name: "sdfgh",
      number: 17,
    },
    {
      rank: 17,
      name: "asdfgh",
      number: 12,
    },
    {
      rank: 18,
      name: "sdf",
      number: 23,
    },
    {
      rank: 19,
      name: "sdfghjk",
      number: 14,
    },
    {
      rank: 20,
      name: "ajsdfghay",
      number: 1,
    },
  ];

  const pdata = [
    {
      rank: 5000,
      name: "Mon",
      number: 11000,
    },
    {
      rank: 7000,
      name: "Tue",
      number: 9000,
    },
    {
      rank: 8000,
      name: "Wed",
      number: 5000,
    },
    {
      rank: 4000,
      name: "Thu",
      number: 5700,
    },
    {
      rank: 10000,
      name: "Fri",
      number: 4000,
    },
    {
      rank: 11000,
      name: "Sat",
      number: 3000,
    },
    {
      rank: 2000,
      name: "Sun",
      number: 7000,
    },
  ];
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      {/* <Header /> */}
      <div className="dashboardcontent">
        <Breadcupdash name={"Dashboard"} />
        <div className="container-fuild py-4" style={{paddingLeft:"0px",paddingRight:"0px"}}>
          <div className="row">
            <div className="col-lg-4 mb-2 col-md-6 col-12 dbox">
              <div className="row bg-white py-3 d-flex align-items-center rounded py-2">
                <div className="col-3">
                  <img src={img1} alt="" />
                </div>
                <div className="col-9">
                  <p className="dbold">254169</p>
                  <p className="pbold">Total created customer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-2 col-md-6 col-12 dbox">
              <div className="row bg-white py-3 d-flex align-items-center rounded py-2">
                <div className="col-3">
                  <img src={img2} alt="" />
                </div>
                <div className="col-9">
                  <p className="dbold">123456</p>
                  <p className="pbold">Pending Checking</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4  mb-2 col-md-6 col-12 dbox">
              <div className="row bg-white py-3 d-flex align-items-center rounded py-2">
                <div className="col-3">
                  <img src={img3} alt="" />
                </div>
                <div className="col-9">
                  <p className="dbold">76543</p>
                  <p className="pbold">Pending approvals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 mx-1">
            <div className="col-lg-5 col-12 dbox rounded my-lg-0 my-2 bg-white specailshow">
              <div className="row">
                <div className="col-12 dtext py-2">Top 10 Remittance</div>
                <div className="col-12 px-2 ">
                  {" "}
                  <div className="underline"></div>
                </div>
              </div>
              <div className="headtb special">
                <div className="sno">Serial No.</div>
                <div className="companylogo">Product</div>
                <div className="amount">Amount</div>
              </div>
              <div className="headtb">
                <div className="sno px-3">01</div>
                <div className="companylogo">
                  <img src={img4} alt="erhgf" />
                </div>
                <div className="amount">50,000</div>
              </div>
              <div className="headtb">
                <div className="sno px-3">02</div>
                <div className="companylogo">
                  <img src={img4} alt="erhgf" />
                </div>
                <div className="amount">50,000</div>
              </div>
              <div className="headtb">
                <div className="sno px-3">03</div>
                <div className="companylogo">
                  <img src={img4} alt="erhgf" />
                </div>
                <div className="amount">50,000</div>
              </div>
              <div className="headtb">
                <div className="sno px-3">04</div>
                <div className="companylogo">
                  <img src={img4} alt="erhgf" />
                </div>
                <div className="amount">50,000</div>
              </div>
              <div className="headtb">
                <div className="sno px-3">05</div>
                <div className="companylogo">
                  <img src={img4} alt="erhgf" />
                </div>
                <div className="amount">50,000</div>
              </div>
              <div className="headtb">
                <div className="sno px-3">06</div>
                <div className="companylogo">
                  <img src={img4} alt="erhgf" />
                </div>
                <div className="amount">50,000</div>
              </div>
              <div className="headtb">
                <div className="sno px-3">07</div>
                <div className="companylogo">
                  <img src={img4} alt="erhgf" />
                </div>
                <div className="amount">50,000</div>
              </div>
              <div className="headtb">
                <div className="sno px-3">08</div>
                <div className="companylogo">
                  <img src={img4} alt="erhgf" />
                </div>
                <div className="amount">50,000</div>
              </div>
              <div className="headtb">
                <div className="sno px-3">09</div>
                <div className="companylogo">
                  <img src={img4} alt="erhgf" />
                </div>
                <div className="amount">50,000</div>
              </div>
              <div className="headtb">
                <div className="sno px-3">10</div>
                <div className="companylogo">
                  <img src={img4} alt="erhgf" />
                </div>
                <div className="amount">50,000</div>
              </div>
              <div className="headtb">
                <div className="sno px-3">11</div>
                <div className="companylogo">
                  <img src={img4} alt="erhgf" />
                </div>
                <div className="amount">50,000</div>
              </div>
            </div>
            <div className="col-lg-7 col-12 dbox">
              <div className="row rounded bg-white ">
                <div className="col-12 d-flex justify-content-between">
                  <div className="dtext py-2">Customer Registration</div>
                  <div className="lastlo d-flex py-2" style={{ gap: "7px" }}>
                    <select
                      name=""
                      id=""
                      className="form-select custselect"
                      aria-label="Default select example"
                    >
                      <option value="qwerty">March</option>
                      <option value="ytrewq">ytrewq</option>
                      <option value="zxcvb">zxcvb</option>
                      <option value="bvcxz">bvcxz</option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="form-select custselect"
                      aria-label="Default select example"
                    >
                      <option value="qwerty">2023</option>
                      <option value="ytrewq">ytrewq</option>
                      <option value="zxcvb">zxcvb</option>
                      <option value="bvcxz">bvcxz</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 px-2 ">
                  {" "}
                  <div className="underline"></div>
                </div>
                <div className="col-12 py-3 ">
                  <ResponsiveContainer width="100%" aspect={2}>
                    <LineChart
                      data={data}
                      margin={{ top: 2, right: 39, bottom: 0, left: 0 }}
                    >
                      <CartesianGrid />
                      <XAxis dataKey="rank" intercept={"preserveStartEnd"} />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          background:
                            "linear-gradient(to right, rgba(12, 83, 152, 1), rgba(18, 113, 205, 1))",
                          border: "1px solid red",
                          outline: "none",
                        }}
                      />
                      <Line dataKey="number" stroke="red" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="row rounded bg-white mt-3">
                <div className="col-12 d-flex justify-content-between">
                  <div className="dtext py-2">Customer Registration</div>
                  <div className="lastlo d-flex py-2" style={{ gap: "7px" }}>
                    <select
                      name=""
                      id=""
                      className="form-select custselect"
                      aria-label="Default select example"
                    >
                      <option value="qwerty">March</option>
                      <option value="ytrewq">ytrewq</option>
                      <option value="zxcvb">zxcvb</option>
                      <option value="bvcxz">bvcxz</option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="form-select custselect"
                      aria-label="Default select example"
                    >
                      <option value="qwerty">2023</option>
                      <option value="ytrewq">ytrewq</option>
                      <option value="zxcvb">zxcvb</option>
                      <option value="bvcxz">bvcxz</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 px-2 ">
                  {" "}
                  <div className="underline"></div>
                </div>
                <div className="col-12 py-3 ">
                  <ResponsiveContainer width="100%" aspect={2}>
                    <BarChart
                      width="100%"
                      aspect={2}
                      data={pdata}
                      margin={{ top: 15, right: 10, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name"></XAxis>
                      <Tooltip
                        contentStyle={{
                          background:
                            "linear-gradient(to right, rgba(12, 83, 152, 1), rgba(18, 113, 205, 1))",
                          border: "1px solid red",
                          outline: "none",
                        }}
                      />
                      <Bar dataKey="rank" fill="#EB011C">
                        <LabelList
                          dataKey="rank"
                          fill="white"
                          angle="90"
                          fontSize={10}
                        />
                      </Bar>
                      <Tooltip
                        contentStyle={{
                          background:
                            "linear-gradient(to right, rgba(12, 83, 152, 1), rgba(18, 113, 205, 1))",
                          border: "1px solid red",
                          outline: "none",
                        }}
                      />
                      <Bar dataKey="number" fill="#0C5398">
                        <LabelList
                          dataKey="number"
                          fill="white"
                          angle="90"
                          fontSize={10}
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
