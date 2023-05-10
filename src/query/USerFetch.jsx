import React, { useEffect } from 'react'
import { useFetchUserData } from '../service/userService'

export const USerFetch = () => {
    const {data,isLoading,isError} = useFetchUserData()
    useEffect(() => {
      
        console.log("data..",data)
        console.log("isLoading..",isLoading)
        console.log("isError..",isError)
      
    }, [isLoading])
    //varibel state change
    
  return (
    <div>
        {
            isLoading?
            "loaiding..." : "data fetched"
        }
    </div>
  )
}
