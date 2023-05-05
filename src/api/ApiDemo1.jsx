import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  //get API
  const [user, setuser] = useState([]);
  var cname = "delhi";

  const getWeather = async () => {

    const res = await axios.get("https://yahoo-weather5.p.rapidapi.com/weather?location="+cname,{
        headers: {
            "X-RapidAPI-Key":"2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6",
            "X-RapidAPI-Host":"yahoo-weather5.p.rapidapi.com"
        }
    })
    console.log(res.data);


  };

  const getData = async () => {
    const res = await axios.get("https://reqres.in/api/users?page=2");
    console.log(res);
    console.log(res.data.data);
    console.log(res.status);
    setuser(res.data.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
        <button onClick={getWeather}>Get Weather</button>
      <table>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
        </tr>
        {user?.map((u) => {
          return (
            <tr>
              <td>{u.id}</td>
              <td>{u.email}</td>
              <td>{u.first_name}</td>
              <td>{u.last_name}</td>
              <td>
                <img src={u.avatar} alt="avatar" />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
