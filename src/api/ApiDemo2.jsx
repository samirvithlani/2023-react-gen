import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo2 = () => {

// const {register,handleSubmit,formState:{errors}} = useForm();
  const postData = async () => {
    var user = {
      name: "Dhoni",
      job: "Cricketer",
    };

    const res = await axios.post("https://reqres.in/api/users", user);
    if (res.status === 201) {
        //alert("Data Posted Successfully");
      toast.success("🦄 Wow so easy!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(res.data);
    }
  };
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
      <button onClick={postData}>Post Data</button>
    </div>
  );
};
