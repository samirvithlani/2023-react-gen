import React, { useState } from 'react'

export const StorageDemo = () => {
    const [uid, setuid] = useState("")
    const storeData =() =>{
        localStorage.setItem("id","abc123")
        sessionStorage.setItem("id","abc1121")
    }
    const retirveData =() =>{
        
        var id = localStorage.getItem("id")
        var id1 = sessionStorage.getItem("id")
        //setuid(id)
        setuid(id1)
    }
    const deleteData =() =>{
        
        localStorage.removeItem("id")
        sessionStorage.removeItem("id")
        setuid("")
        //localStorage.clear()
    }
  return (
    <div>
        <h1>StorageDemo</h1>
        <button onClick={()=>{storeData()}}>STORE</button>
        <button onClick={()=>{retirveData()}}>RETRIVE</button>
        <button onClick={()=>{deleteData()}}>DELETE</button>
        {
            uid
        }

    </div>
  )
}

