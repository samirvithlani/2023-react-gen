import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Employees = () => {
    
    const location = useLocation()

    
    
    var employees = [
        {
            id: 1,
            name: "vihang",
        },{
            id: 2,
            name: "nisarg",
        },{
            id: 3,
            name: "sanket",
        }
    ]
  return (
    <div>
        <h1>Employees</h1>
        {/* <Link to="contactus/vihang">contactus</Link> */}
        {
            location?.state?.data
        }
        <ul>
            {
                employees.map((employee,key)=>{
                    return(
                        <li>
                            <Link to = {`contactus/${employee.id}`}>{employee.id}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
