import React, { useEffect } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import img from "./assets/loginlogo.png";
import img from "./assets/Ecomus.svg";
import img1 from "./assets/dashboard.png";
import img4 from "./assets/team.png";
import img5 from "./assets/options.png";
import img8 from "./assets/brand.png";
import img9 from "./assets/logout 2.png";
import img11 from "./assets/ads.png";
import img12 from "./assets/products.png";
import img13 from "./assets/personal-information.png";
import img40 from "./assets/trolley.png";
import img43 from "./assets/completed-task.png";
import { gettoken, removeToken, sohstore } from "./Localstorage/Store";
import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";

const Sidebarmenu = ({ children }) => {
  const gettokinval = gettoken();
  const nvg = useNavigate();
  const logoutevt = async () => {
    removeToken();
    nvg("/");
  };
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (key) => {
    setOpenSubMenu(key === openSubMenu ? null : key);
  };
  useEffect(() => {
    sohstore(false);
  }, []);
  const [hideimg, sethideimg] = useState(false);
  const { collapseSidebar } = useProSidebar();
  const hideorshow = () => {
    sethideimg(!hideimg);
    sohstore(!hideimg);
  };
  const location = useLocation();
  const result = location.pathname.substring(
    0,
    location.pathname.lastIndexOf("/")
  );
  const desiredString = location.pathname.split("/").slice(0, 2).join("/");
  if (
    location.pathname === "/" ||
    desiredString === "/forgetpassword" ||
    location.pathname === "/resetpassword"
  ) {
    return (
      <div
        style={{
          background:
            location.pathname === "/resetpassword" ? "#ffff" : "#F3F6FA",
        }}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar className="sidebarcum" defaultCollapsed="close">
          <div>
            <Menu className="nothover abc">
              <MenuItem
                className="nothover abc"
                style={{ borderBottom: "1px solid #D9D9D9" }}
                icon={
                  <GiHamburgerMenu
                    children="logobtn"
                    fontSize={23}
                    onClick={() => {
                      collapseSidebar();
                      hideorshow();
                    }}
                    color="#0C5398"
                  />
                }
              >
                {" "}
                {hideimg == true ? (
                  <img src={img} alt="qwerty" style={{ width: "80%" }} />
                ) : (
                  ""
                )}
              </MenuItem>
            </Menu>
            <Menu>
              <NavLink
                to="/dashboard"
                className={
                  location.pathname === "/dashboard" ? "nav active" : "nav"
                }
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{width:"36px"}} src={img1} alt="qwert" />}
                >
                  {" "}
                  Dashboard{" "}
                </MenuItem>
              </NavLink>

              <NavLink
                to="/userlist/0"
                className={
                  location.pathname === "/adduser" ||
                  result === "/userlist" ||
                  result === "/edituser"
                    ? "nav active"
                    : "nav"
                }
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{width:"36px"}} src={img4} alt="qwdfgerct" />}
                >
                  {" "}
                  User
                </MenuItem>
              </NavLink>
              <NavLink
                to="/cartlist/0"
                className={
                  location.pathname === "/" ||
                  result === "/cartlist" ? "nav active"
                    : "nav"
                }
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{width:"36px"}} src={img40} alt="qwdfgerct" />}
                >
                  {" "}
                  Cart
                </MenuItem>
              </NavLink>

{/*
              <NavLink
                to="/attributelist/0"
                className={
                  location.pathname === "/addattribute" ||
                  result === "/attributelist" ||
                  result === "/editattribute"
                    ? "nav active"
                    : "nav"
                }
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{width:"36px"}} src={img5} alt="qwdfgerct" />}
                >
                  {" "}
                  Attributes 
                </MenuItem>
              </NavLink>
*/}
              <NavLink
                to="/categorylist/0"
                className={
                  location.pathname === "/addcategory" ||
                  result === "/categorylist" ||
                  result === "/editcategory"
                    ? "nav active"
                    : "nav"
                }
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{width:"36px"}} src={img5} alt="qwdfgerct" />}
                >
                  {" "}
                  Category 
                </MenuItem>
              </NavLink>
              <NavLink
                to="/orderlist/0"
                className={
                  location.pathname === "/addorder" ||
                  result === "/orderlist" ||
                  result === "/editorder"
                    ? "nav active"
                    : "nav"
                }
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{width:"36px"}} src={img43} alt="qwdfgerct" />}
                >
                  {" "}
                  Order 
                </MenuItem>
              </NavLink>
              <NavLink
                to="/productlist/0"
                className={
                  location.pathname === "/addproduct" ||
                  result === "/productlist" ||
                  result === "/editproduct"
                    ? "nav active"
                    : "nav"
                }
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{width:"36px"}} src={img12} alt="menu" />}
                >
                  {" "}
                  Product 
                </MenuItem>
              </NavLink>
              <NavLink
                to="/bannerlist/0"
                className={
                  location.pathname === "/addbanner" ||
                  result === "/bannerlist" ||
                  result === "/editbanner"
                    ? "nav active"
                    : "nav"
                }
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{width:"36px"}} src={img11} alt="menu" />}
                >
                  {" "}
                  Banner 
                </MenuItem>
              </NavLink>
              <NavLink
                to="/brandlist/0"
                className={
                  location.pathname === "/addbrand" ||
                  result === "/brandlist" ||
                  result === "/editbrand"
                    ? "nav active"
                    : "nav"
                }
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{width:"36px"}} src={img8} alt="menu" />}
                >
                  {" "}
                  Brand 
                </MenuItem>
              </NavLink>
              <NavLink
               className={
                result === "/webinfo"
                  ? "nav active"
                  : "nav"
              }
                to="/webinfo"
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{width:"36px"}} src={img13} alt="menu" />}
                >
                  {" "}
                  Webinfo 
                </MenuItem>
              </NavLink>


              {/* <SubMenu
                title="Submenu 1"
                key="submenu1"
                open={openSubMenu === "submenu1"}
                onClick={() => handleSubMenuClick("submenu1")}
                icon={<img style={{width:"36px"}} src={img8} alt="qwerct" />}
                label="Checking"
              >
                <NavLink
                  to="/checkcustomerlist/0"
                  className={
                    location.pathname === "/checkcustomerlist" ||
                    result === "/checkeditcustomer" ||
                    result === "/checkcustomerdetail"
                      ? "nav active"
                      : "nav"
                  }
                >
                  <MenuItem
                    style={{ paddingLeft: hideimg == true ? "72px" : "30px" }}
                  >
                    {" "}
                    Customer
                  </MenuItem>
                </NavLink>
                <NavLink
                  to="/checkagentlist/0"
                  className={
                    location.pathname === "/checkagentlist/0" ||
                    result === "/checkagentdetail" ||
                    result === "/checkeditagent"
                      ? "nav active"
                      : "nav"
                  }
                >
                  <MenuItem
                    style={{ paddingLeft: hideimg == true ? "72px" : "30px" }}
                  >
                    {" "}
                    Agent
                  </MenuItem>
                </NavLink>
                <NavLink
                  to="/checkremittancelist/0"
                  className={
                    location.pathname === "/checkremittancelist/0" ||
                    result === "/checkeditremittance" ||
                    result === "/checkremittancedetail"
                      ? "nav active"
                      : "nav"
                  }
                >
                  <MenuItem
                    style={{ paddingLeft: hideimg == true ? "72px" : "30px" }}
                  >
                    {" "}
                    Remittance
                  </MenuItem>
                </NavLink>
              </SubMenu> */}

              <NavLink to="/" onClick={logoutevt} className="nav">
                <MenuItem
                  className="nothover"
                  icon={<img style={{width:"36px"}} src={img9} alt="qwerct" />}
                >
                  {" "}
                  Log Out{" "}
                </MenuItem>
              </NavLink>
            </Menu>
          </div>
        </Sidebar>
        <div style={{ width: "100%" }}>
          <Header />
          {children}
        </div>
      </div>
    );
  }
};

export default Sidebarmenu;
