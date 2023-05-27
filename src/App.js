import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Content } from "./employeemang/Content";
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
import { Sidebar } from "./employeemang/Sidebar";
import { Helmet } from "react-helmet";
import { ButtonDemo } from "./mui/ButtonDemo";
import { MuiTable } from "./mui/MuiTable";

function App() {
  var title = "React App";
  var payload = "This is a payload";
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="../assets/img/favicon/favicon.ico"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />

        <link
          rel="stylesheet"
          href="../assets/vendor/css/core.css"
          class="template-customizer-core-css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendor/css/theme-default.css"
          class="template-customizer-theme-css"
        />
        <link rel="stylesheet" href="../assets/css/demo.css" />

        <link
          rel="stylesheet"
          href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
        />

        <link
          rel="stylesheet"
          href="../assets/vendor/libs/apex-charts/apex-charts.css"
        />
      </Helmet>
      {/* <div className="layout-wrapper layout-content-navbar"> */}
        {/* <div className="layout-container"> */}
        <div>
          <div>
          {/* <Sidebar /> */}
          <Navbar/>

          <br />
          <AppContext.Provider value={{ title }}>
            <Routes>
              <Route path="/" element={<Content />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path ="/muibutton" element={<ButtonDemo></ButtonDemo>}></Route>
              <Route path ="/muitable" element={<MuiTable/>}></Route>

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
              <Route path="/dynamicform" element={<DynamicForm />}></Route>
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
      </div>
    </>
  );
}

export default App;
