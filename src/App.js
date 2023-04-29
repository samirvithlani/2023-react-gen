import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Content } from "./components/Content";
import { Users } from "./users/Users";
import { Registration } from "./forms/Registration";
import { StudentReg } from "./forms/StudentReg";
import { Route, Routes } from "react-router-dom";
import { Employees } from "./components/employee/Employees";
import { AboutUs } from "./components/employee/AboutUs";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/employee/Home";
import { Error } from "./components/employee/Error";
import { ContactUs } from "./components/employee/ContactUs";
import { StorageDemo } from "./storage/StorageDemo";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  var title = "React App";
  var payload = "This is a payload";
  return (
    <div className="App">
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
        </Route>

        <Route path="/*" element={<Error />}></Route>
        <Route path="/store" element={<StorageDemo />}></Route>
        {/* <Route path ="/employees/contactus" element={<ContactUs/>}></Route> */}
        <Route path="/employees/contactus/:id" element={<ContactUs />}></Route>
      </Routes>

      {/* <Content  payload ={payload}/> */}
      {/* <Users/> */}
      {/* <Registration/> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
