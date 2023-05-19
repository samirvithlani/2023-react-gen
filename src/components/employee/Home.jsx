import React, { useContext } from 'react'
import { AppContext } from '../../context/context'

export const Home = () => {
  var {title} = useContext(AppContext)
  return (
    <div>
        <h1>EMPLOYEE DASHBOARD LOAD... {title}</h1>
    </div>
  )
}
