import React, { useEffect } from "react";
import { usePostData } from "../service/userService";

export const PostUserData = () => {
  const { data, isError, isIdle, isLoading, mutate } = usePostData();
  //const mutation = usePostData();
  const submit = async () => {
    var user = {
      name: "ABC",
      email: "devanshujethva3000@gmail.com",
      age: 97,
      isActive: false,
    };

    mutate(user)
    //navigation

  };
  useEffect(() => {
    console.log("data,,,", data); //data
    console.log("isError,,,", isError);
    console.log("isIdle,,,", isIdle); //trur. false
    console.log("isLoading,,,", isLoading);// true ..false
  }, [isIdle,isLoading]);

  return (
    <div>
      <button
        onClick={() => {
          submit();
        }}
      >
        SUBMIT DATA
      </button>
    </div>
  );
};
