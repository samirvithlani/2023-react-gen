import React, { useState } from "react";
import { AddUser } from "./AddUser";
import { UserList } from "./UserList";

export const Users = () => {
  var users = [
    {
      id: 1,
      name: "Raj",
      email: "raj@gmail.com",
      age: 30,
      gender: "Male",
    },
    {
      id: 2,
      name: "Jaya",
      email: "jaya@gmail.com",
      age: 45,
      gender: "FeMale",
    },
    {
      id: 3,
      name: "Parth",
      email: "parth@gmail.com",
      age: 27,
      gender: "Male",
    },
  ];

  //initial value...
  //var userData;
  const [userData, setuserData] = useState(users);

  function deleteUser(id) {
    users = userData.filter((u) => {
      return u.id !== id;
    });
    console.log(users);
    //updated user
    setuserData(users);
  }

  const addUser = (user) => {
    console.log("add user", user);
    //spread operator

    users = [...userData,user]
    setuserData(users);


    // users = users.push(user);
    // setuserData(users);
    // console.log(users);
  };

  return (
    <div>
      {/* <UserList users ={users} deleteUser = {deleteUser}/> */}
      <AddUser addUser={addUser} />
      <UserList users={userData} deleteUser={deleteUser} />
    </div>
  );
};
