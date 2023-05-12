import axios from "axios"
import { useMutation, useQuery } from "react-query"

const getUserData =async ()=>{

    return axios.get("http://localhost:3001/user/user")
}

const postUserData = async (data)=>{

    console.log('post user function',data)
    return axios.post("https://node5.onrender.com/user/user",data)
}

export const useFetchUserData = ()=>{

    return useQuery("getData",getUserData,{
        retry:10,
        retryDelay:100
    })
}

export const usePostData = ()=>{


    return useMutation("postData",postUserData,{

        // onSuccess:(data)=>{
        //     console.log('post data success',data)
        //     //navigate...
        // },
        // onError:(error)=>{
        //     console.log('post data error',error)
        // }
    })

}


