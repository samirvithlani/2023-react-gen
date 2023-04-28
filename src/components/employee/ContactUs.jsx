import React from 'react'
import { useParams } from 'react-router-dom'

export const ContactUs = () => {
    var id =useParams().id
  return (
    <div>ContactUs
        <h2>{id}</h2>
    </div>
  )
}
