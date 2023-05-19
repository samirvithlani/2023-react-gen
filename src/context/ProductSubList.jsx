import React, { useContext } from 'react'
import { AppContext } from './context'

export const ProductSubList = () => {
    const {products} = useContext(AppContext)
    console.log(products)
  return (
    <div>ProductSubList</div>
  )
}
