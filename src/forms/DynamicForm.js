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
    },
    {
      label: "Email",
      filedName: "email",
      filedType: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      filedName: "password",
      filedType: "password",
      placeholder: "Enter your password",
    },
    {
      label: "color",
      filedName: "color",
      filedType: "color",
    },
    {
      label: "Male",
      filedName: "gender",
      filedType: "radio",
      value: "Male",
      name: "gender",
    },
    {
      label: "Female",
      filedName: "gender",
      filedType: "radio",
      value: "FeMale",
      name: "gender",
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

  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
  };

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
                  {...register(form.filedName)}
                />
              )}
            </div>
          );
        })}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
