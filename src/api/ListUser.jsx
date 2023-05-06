import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ListUser = () => {
  const [users, setusers] = useState([]);
    

  const getUserDetail = async () => {
    const res = await axios.get("http://localhost:3001/user/user");
    setusers(res.data.data);
  };

  const deleteUser = async (id) => {

    const res = await axios.delete("http://localhost:3001/user/user/"+id)
    console.log(res)
    if(res.status===204){
        toast.success("record deleted....", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        getUserDetail();
    }

  }
  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div>
         <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
     
      <h1>List User</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>EMAIL</th>
            <th>STATUS</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? "Active":"Not Active"}</td>
                <td>
                    <button onClick={()=>{deleteUser(user._id)}} className="btn btn-danger">DELETE</button>
                    <Link to = {`/edituser/${user._id}`} className="btn btn-info">EDIT</Link>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
