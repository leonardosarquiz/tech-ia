import { ReactNode, createContext, useEffect,  useState } from "react"
import { FetchProducts } from "../api/FetchProducts"

interface ProductType {
  id: string
  title: string
  price: number
  thumbnail: string
  
  }

  interface ApiContextType {
    products: ProductType[]
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
    cardItems: ProductType[]
    SetCardItems: React.Dispatch<React.SetStateAction<ProductType[]>>
  
  }

  interface TransactionsProviderProps {
    children: ReactNode
    
  }

export const ApiContext = createContext({} as ApiContextType)

export function ApiProvider({children}: TransactionsProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([]) 
  const [cardItems, SetCardItems] = useState<ProductType[]>([])


  useEffect(() => {
 FetchProducts('iphone').then((response) => {
  setProducts(response)

 })
  }, [])

  return (
    <ApiContext.Provider value={{products, setProducts, cardItems, SetCardItems}}>
      {children}
    </ApiContext.Provider>
  )
}



