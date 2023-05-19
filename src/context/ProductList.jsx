import React, { useContext } from "react";
import { AppContext } from "./context";
import { ProductSubList } from "./ProductSubList";

export const ProductList = () => {
  var { products,productDispatcher } = useContext(AppContext);
  //console.log(products)
  return (
    <div>
      {/* <ProductSubList></ProductSubList> */}
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <button onClick={()=>{productDispatcher(product.id,"DELETE_PRODUCT")}}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
