import { Outlet } from "react-router-dom"
import { Log } from "../api/Log";
import { StorageDemo } from "../storage/StorageDemo"


//user define 
const useAuth = () =>{

        var id = localStorage.getItem("id")
        if(id==undefined||id==null||id=="")
        {
            return false;
        }
        else{
            return true;
        }

       
       
}

const ProtectedRoutes  = ()=>{

    return useAuth() ? <Outlet/> : <Log/>
    //useAuth ?<Outlet/> : login Component

}
export default ProtectedRoutes;

