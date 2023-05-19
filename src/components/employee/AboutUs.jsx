import React, { useContext } from 'react'
import { AppContext } from '../../context/context'

export const AboutUs = () => {
  var {title}  = useContext(AppContext)
  return (
    <div>AboutUs {title}</div>
  )
}
