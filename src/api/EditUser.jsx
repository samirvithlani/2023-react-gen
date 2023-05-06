import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const EditUser = () => {
  const id = useParams().id;

  var navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async ()=>{
        const res = await axios.get("http://localhost:3001/user/user/"+id)
        console.log(res.data.data)
        return(
            {
                name:res.data.data.name,
                age:res.data.data.age,
                email:res.data.data.email,
                isActive:res.data.data.isActive ? "Active" : "Inactive",
            }
        )
    }
    // defaultValues:{
    //     name:"Rahul",
    // }
  });

  const updateUser = async (data) => {

    var user ={
        name:data.name,
        age:data.age,
        email:data.email,
        isActive:data.isActive==="Active" ? true : false,
    }

    const res = await axios.put("http://localhost:3001/user/user/"+id,user)
    console.log(res)
    //if else.....
    navigate("/listuser")
    

  };
  return (
    <div>
      EditUser
      <form onSubmit={handleSubmit(updateUser)}>
        <div>
          <label htmlFor="name">NAme</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label htmlFor="name">age</label>
          <input type="text" {...register("age")}></input>
        </div>

        <div>
          <label htmlFor="name">email</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label htmlFor="name">status</label>
          <input type="text" {...register("isActive")}></input>
        </div>
        <div>
          <input type="submit" value="Update User" />
        </div>
      </form>
    </div>
  );
};
