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
import { ApiDemo1 } from "./api/ApiDemo1";
import { ApiDemo2 } from "./api/ApiDemo2";
import { ListUser } from "./api/ListUser";
import { EditUser } from "./api/EditUser";
import { USerFetch } from "./query/USerFetch";
import { PostUserData } from "./query/PostUserData";
import { Products } from "./context/Products";
import { AppContext } from "./context/context";
import { DynamicForm } from "./forms/DynamicForm";

function App() {
  var title = "React App";
  var payload = "This is a payload";
  return (
    <div className="App">
      
      <Navbar />
      
      <br />
      <AppContext.Provider value={{ title }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/employees" element={<Employees />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
          </Route>

          <Route path="/*" element={<Error />}></Route>
          <Route path="/store" element={<StorageDemo />}></Route>
          <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
          <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
          <Route path="/listuser" element={<ListUser />}></Route>
          <Route path="/edituser/:id" element={<EditUser />}></Route>
          <Route path="/query/user" element={<USerFetch />}></Route>
          <Route path="/query/user/add" element={<PostUserData />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path ="/dynamicform" element = {<DynamicForm/>}></Route>
          {/* <Route path ="/employees/contactus" element={<ContactUs/>}></Route> */}
          <Route
            path="/employees/contactus/:id"
            element={<ContactUs />}
          ></Route>
        </Routes>
      </AppContext.Provider>

      {/* <Content  payload ={payload}/> */}
      {/* <Users/> */}
      {/* <Registration/> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
