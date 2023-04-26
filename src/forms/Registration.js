import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Registration = () => {
  const { register, handleSubmit } = useForm();
  const [userData, setuserData] = useState({});
  var countries = [
    "India",
    "USA",
    "UK",
    "Australia",
  ]

  const submit = (data) => {
    console.log(data);
    setuserData(data);
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>First Name</label>
          <input type="text" {...register("fname")}></input>
        </div>
        <div>
          <lable>GENDER</lable>
          <br></br>
          MALE{" "}
          <input
            type="radio"
            value="Male"
            name="gender"
            {...register("gender")}
          ></input>
          <br></br>
          FeMALE{" "}
          <input
            type="radio"
            value="FeMale"
            name="gender"
            {...register("gender")}
          ></input>
        </div>
        <div>
          <label>Hobbies</label>
          <br></br>
          READING
          <input
            type="checkbox"
            value="Reading"
            {...register("hobbies")}
          ></input>
          <br></br>
          Travel
          <input
            type="checkbox"
            value="Travel"
            {...register("hobbies")}
          ></input>
          <br></br>
          Sleeping
          <input
            type="checkbox"
            value="Sleeping"
            {...register("hobbies")}
          ></input>
          <br></br>
        </div>
        <div>
            <label>Country</label>
            <select {...register("country")}>
                {
                    countries.map((c)=>{
                        return <option value={c}>{c}</option>
                    })
                }
            </select>
        </div>
        <div>
          <label>Country</label>
          <select {...register("country")}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>

        <h1>{userData.fname}</h1>
        <h2>{userData.gender}</h2>
        <h2>{userData.country}</h2>
        <ul>
          {userData.hobbies?.map((h) => {
            return <li>{h}</li>;
          })}
        </ul>
      </form>
    </div>
  );
};
