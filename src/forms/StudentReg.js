import React from "react";
import { useForm } from "react-hook-form";

export const StudentReg = () => {
  const validationSchema = {
    sname: {
      required: {
        value: true,
        message: "required...",
      },
      minLength: {
        value: 5,
        message: "min length is 5",
      }
    },
    sage: {
        required: {
            value: true,
            message: "required...",
        },
        min:{
            value:18,
            message:"min age is 18"
        },max:{
            value:60,
            message:"max age is 60"
        }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("error", errors);
  const addStudent = (data) => {
    console.log("addStudent");
    console.log(errors);
    console.log(data);
  };

  return (
    <div>
      <h1>StudentReg</h1>
      <form onSubmit={handleSubmit(addStudent)}>
        <div>
          <label>Student Name</label>
          {/* <input type="text" {...register("sname",{required:{value:true,message:"required....."}})}/> */}
          <input type="text" {...register("sname", validationSchema.sname)} />
          {
            errors.sname  && <span style={{color:"red"}}>{errors.sname.message}</span>
          }
        </div>
        <div>
            <label>Student Age</label>
            <input type="text" {...register("sage",validationSchema.sage)}/>
            {
                errors.sage  && <span style={{color:"red"}}>{errors.sage.message}</span>
            }
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
