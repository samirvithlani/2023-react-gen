import React, { useState } from 'react'
import { AppContext } from './context'
import { ProductList } from './ProductList'

export const Products = () => {
    const [products, setproducts] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 100
        },
        {
            id: 2,
            name: 'Product 2',
            price: 120
        },
    ])
    const deleteProduct = (id)=>{
        
        setproducts(products.filter(product=>product.id!==id))
        alert("delete product called..")
    }
    const addProduct = (product)=>{
        setproducts([...products,product])
    }
    const productDispatcher = (payload,action)=>{

        switch (action) {

            case 'ADD_PRODUCT':
                addProduct(payload)
                break;
            case 'DELETE_PRODUCT':
                console.log("delete action called..")
                deleteProduct(payload)
                break;
            default:
                break;        
        }
    }
  return (
    <div>
        <AppContext.Provider value ={{products,productDispatcher}}>
        <ProductList></ProductList>
        
        </AppContext.Provider>
    </div>
  )
}
