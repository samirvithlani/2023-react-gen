import React from 'react'
import { useParams } from 'react-router-dom'

export const ContactUs = () => {
    var id =useParams().id
  return (
    <div>
      { localStorage.getItem("id") ?
        <div>
          ok
          </div>
        : "Please Login"
      }
    </div>
  )
}
