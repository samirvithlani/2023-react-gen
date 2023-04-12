import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Content } from "./components/Content";

function App() {

  var title = "React App";
  var payload = "This is a payload";
  return (
    <div className="App">
      <Header  title ={title}/>

      <Content  payload ={payload}/>

      <Footer />
    </div>
  );
}

export default App;
