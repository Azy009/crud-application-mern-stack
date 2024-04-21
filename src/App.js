import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Userlist from "./pages/User/Listuser/Userlist";
import Edituser from "./pages/User/Edituser/Edituser";
import Adduser from "./pages/User/Adduser/Adduser";
function App() {
 
  return (
    <div className="app">
      
      <Router>
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/:id" element={<Userlist />} />
          <Route path="/edituser/:id" element={<Edituser />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
