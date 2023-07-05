import { ContainerProducts, ContainerProductsa, Product,  } from "./styles";

import { useContext } from "react";

import { fromatCurrency } from "../../utils/formatCurrency";
import { ApiContext } from "../../context/MyContexts";



interface ProductType {
id: string
title: string
price: number
thumbnail: string

}

export function Products() {
  
const {products, SetCardItems, cardItems} = useContext(ApiContext)

function handleAddToCart(product: ProductType) {
  SetCardItems([...cardItems, product]);
}
 
  return (

    <ContainerProducts>

       
       <ContainerProductsa>

        
          {products.map((product: ProductType) => 
         <Product key={product.id} >
         <img src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="" />
         <h4>{product.title.split(' ').slice(0, 7).join(' ')}</h4>
         <p>{fromatCurrency(product.price)}</p>
         <button onClick={() => handleAddToCart(product)}>Adicionar ao carrinho</button>
       </Product>
        )} 
         
        
       
      
  
       </ContainerProductsa>
      
      </ContainerProducts>
     
  )
}