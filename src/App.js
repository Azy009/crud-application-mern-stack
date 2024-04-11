import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Userlist from "./pages/User/Listuser/Userlist";
import Login from "./pages/Login/Login";
import Addprofile from "./pages/Profile/Addprofile";
import Editprofile from "./pages/Profile/Editprofile";
import Profiledetail from "./pages/Profile/Profiledetail";
import Forgetpassword from "./pages/Login/Forgetpassword";
import Resetpassword from "./pages/Login/Resetpassword";
import Categorylist from "./pages/Category/Listcategory/Categorylist";
import Addcategory from "./pages/Category/Addcategory/Addcategory";
import EditCategory from "./pages/Category/Editcategory/EditCategory";
import Edituser from "./pages/User/Edituser/Edituser";
import Productlist from "./pages/Product/Listproduct/Productlist";
import Addproduct from "./pages/Product/Addproduct/Addproduct";
import EditProduct from "./pages/Product/Editproduct/EditProduct";
import Bannerlist from "./pages/Banner/Listbanner/Bannerlist";
import Addbanner from "./pages/Banner/Addbanner/Addbanner";
import Editbanner from "./pages/Banner/Editbanner/Editbanner";
import Webinfo from "./pages/Website_info/webinfo/Webinfo";
import Cartlist from "./pages/Cart/Listcart/Cartlist";
import Addattribute from "./pages/Attributes/Addattributes/Addattribute";
import Attributelist from "./pages/Attributes/Listattributes/Attributelist";
import Editattribute from "./pages/Attributes/Editattributes/Editattribute";
import AddVariant from "./pages/Variant/AddVariant/AddVariant";
import EditVariant from "./pages/Variant/EditVariant/EditVariant";
import Brandlist from "./pages/Brand/Listbrand/Brandlist";
import Addbrand from "./pages/Brand/Addbrand/Addbrand";
import Editbrand from "./pages/Brand/Editbrand/Editbrand";
import Orderlist from "./pages/Order/Listorder/Orderlist";
import Editorder from "./pages/Order/Editorder/Editorder";
function App() {
 
  return (
    <div className="app">
      
      <Router>
      <Sidebar>
        <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/resetpassword" element={<Forgetpassword />} />
        <Route path="/forgetpassword/:id1/:id2" element={<Resetpassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addprofile" element={<Addprofile/>} />
          <Route path="/profiledetail" element={<Profiledetail/>} />
          <Route path="/editprofile" element={<Editprofile/>} />
          <Route path="/webinfo" element={<Webinfo/>} />
          <Route path="/addvariant/:id" element={<AddVariant />} />
          <Route path="/editvariant/:id" element={<EditVariant />} />
          <Route path="/userlist/:id" element={<Userlist />} />
          <Route path="/brandlist/:id" element={<Brandlist />} />
          <Route path="/bannerlist/:id" element={<Bannerlist />} />
          <Route path="/categorylist/:id" element={<Categorylist />} />
          <Route path="/attributelist/:id" element={<Attributelist />} />
          <Route path="/cartlist/:id" element={<Cartlist />} />
          <Route path="/productlist/:id" element={<Productlist />} />
          <Route path="/orderlist/:id" element={<Orderlist />} />
          <Route path="/editcategory/:id" element={<EditCategory />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          <Route path="/editattribute/:id" element={<Editattribute />} />
          <Route path="/editorder/:id" element={<Editorder />} />
          <Route path="/addcategory" element={<Addcategory />} />
          <Route path="/addbanner" element={<Addbanner />} />
          <Route path="/addbrand" element={<Addbrand />} />
          <Route path="/addattribute" element={<Addattribute />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/edituser/:id" element={<Edituser />} />
          <Route path="/editbanner/:id" element={<Editbanner />} />
          <Route path="/editbrand/:id" element={<Editbrand />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </Sidebar>
    </Router>
    </div>
  );
}

export default App;
