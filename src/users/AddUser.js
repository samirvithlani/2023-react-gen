import React, { useState } from "react";

export const AddUser = (props) => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");

  const nameHandler = (e) => {
    console.log(e)
    console.log(e.target.value);
    setname(e.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();

    var userData = {
      name: name,
      age: age,
      email: email,
      gender: gender,
    };
    // console.log(userData);

    props.addUser(userData)

  };

  return (
    <div>
      <h1>ADD USER FORM</h1>
      <form
        onSubmit={(e) => {
          submitData(e);
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={(e) => {
              nameHandler(e);
            }}
          ></input>
          {name}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            onChange={(e) => {
              setage(e.target.value);
            }}
          ></input>
          {age}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>GENDER</label>
          <br />
          MALE{" "}
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={(e) => {
              setgender(e.target.value);
            }}
          ></input>
          <br />
          FEMALE
          <input
            type="radio"
            value="FEMale"
            name="gender"
            onChange={(e) => {
              setgender(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <input type="submit" value="Add User"></input>
        </div>
      </form>
    </div>
  );
};
