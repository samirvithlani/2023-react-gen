import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const DynamicForm = () => {
  const [formData, setformData] = useState([
    {
      label: "Name",
      filedName: "name",
      filedType: "text",
      placeholder: "Enter your name",
      validation: {
        required: {
          value: true,
          message: "Name is required",
        },
        minLength: {
          value: 3,
          message: "Minimum 3 characters are allowed",
        }
      },
    },
    {
      label: "Email",
      filedName: "email",
      filedType: "email",
      placeholder: "Enter your email",
      validation: {
        required: {
          value: true,
          message: "Email is required",
        },
        pattern: {
          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message: "Invalid email address",
        },
      }
    },
    {
      label: "Password",
      filedName: "password",
      filedType: "password",
      placeholder: "Enter your password",
      validation: {
        required: {
          value: true,
          message: "Password is required",
        },
        minLength: {
          value: 6,
          message: "Minimum 6 characters are allowed",
        },
      }
    },
    {
      label: "color",
      filedName: "color",
      filedType: "color",
      validation:{
        required: {
          value: true,
          message: "Color is required",
        },
      }
    },

    {
      label: "Male",
      filedName: "gender",
      filedType: "radio",
      value: "Male",
      name: "gender",
      validation:{
        required: {
          value: true,
          message:"required"
        }
      }
    },
    {
      label: "Female",
      filedName: "gender",
      filedType: "radio",
      value: "FeMale",
      name: "gender",
      validation:{
        required: {
          value: true,
          message:"required"
        }
      }
    },
    {
      label: "Cricket",
      filedName: "hoobies",
      filedType: "checkbox",
      value: "Cricket",
      name: "hoobies",
    },
    {
      label: "Football",
      filedName: "hoobies",
      filedType: "checkbox",
      value: "Football",
      name: "hoobies",
    },
    {
      label: "Home",
      filedName: "address",
      filedType: "checkbox",
      value: "Home",
      name: "address",
    },
    {
      label: "Office",
      filedName: "address",
      filedType: "checkbox",
      value: "Office",
      name: "address",
    },
    {
      label: "Select",
      filedName: "select",
      filedType: "select",
      options: [
        {
          label: "Select",
          value: "",
        },
        {
          label: "Option 1",
          value: "Option 1",
        },
        {
          label: "Option 2",
          value: "Option 2",
        },
      ],
    },
  ]);

  const { register, handleSubmit,formState:{errors} } = useForm(
    {
      mode:"onSubmit"
    }
  );
  const submit = (data) => {
    console.log(data);
  };
  console.log("error...",errors);

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        {formData.map((form) => {
          return (
            <div>
              <label>{form.label}</label>
              {form.filedType === "select" ? (
                <select {...register(form.filedName)}>
                  {form.options.map((option) => {
                    return <option value={option.value}>{option.label}</option>;
                  })}
                </select>
              ) : (
                <input
                  type={form.filedType}
                  placeholder={form.placeholder}
                  value={form?.value}
                  {...register(form.filedName,form.validation)}
                />
              )}
              {errors[form.filedName]?.message}
              
            </div>
          );
        })}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
