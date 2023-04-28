import React from 'react'
import { Link } from 'react-router-dom'

export const Employees = () => {
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
        <ul>
            {
                employees.map((employee)=>{
                    return(
                        <li>
                            <Link to = {`contactus/${employee.id}`}>{employee.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
