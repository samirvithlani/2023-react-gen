import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Content } from "./components/Content";
import { Users } from "./users/Users";
import { Registration } from "./forms/Registration";
import { StudentReg } from "./forms/StudentReg";

function App() {

  var title = "React App";
  var payload = "This is a payload";
  return (
    <div className="App">
      <Header  title ={title}/>
      <br/>

      {/* <Content  payload ={payload}/> */}
      {/* <Users/> */}
      {/* <Registration/> */}
      <StudentReg/>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
