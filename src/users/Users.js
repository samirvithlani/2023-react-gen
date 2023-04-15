import React, { useState } from "react";
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
    const [userData, setuserData] = useState(users)


 
  function deleteUser(id){
    users = userData.filter((u)=>{
        return u.id !== id
    })
    console.log(users)
    //updated user
    setuserData(users)

  }



  return (
    <div>
        {/* <UserList users ={users} deleteUser = {deleteUser}/> */}
        <UserList users ={userData} deleteUser = {deleteUser}/>
    </div>
  );
};
