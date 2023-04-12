import logo from "./logo.svg";
import "./App.css";

function App() {
  //js
  var name = "royal";
  var year = 2021;
  var isActive = false;
  var data ={
    name: "Ahmedabad",
    pincode: 380001
  }
  console.log(data);   

  return (
    <>
      <div className="App">
        <h1>Name = {name}</h1>
        <h2>Year = {year}</h2>
        <h3>Active ? {isActive == true ? "YES" : "NO"}</h3>
        <h3>city = {data.name}</h3>
        <h3>pincode = {data.pincode}</h3>
        <p>{data.pincode}</p>
      </div>
    </>
  );
}

export default App;
