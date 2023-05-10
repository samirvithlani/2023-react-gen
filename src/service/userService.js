import axios from "axios"
import { useQuery } from "react-query"

const getUserData =async ()=>{

    return axios.get("http://localhost:3001/user/user")
}

export const useFetchUserData = ()=>{

    return useQuery("getData",getUserData,{
        retry:10,
        retryDelay:100
    })
}

