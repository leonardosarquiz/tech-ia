
import { FormEvent, useContext, useState } from "react";
import { InputSearch, SearchContainer } from "./styles";
import { ApiContext } from "../../context/MyContexts";
import { FetchProducts } from "../../api/FetchProducts";





export function Search() {
  const [searchValue, setSearchValue] = useState('');
  const {setProducts} = useContext(ApiContext)

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const products = await FetchProducts(searchValue)
  setProducts(products)
  setSearchValue('')

  }
  return (
  <SearchContainer onSubmit={handleSearch}>
    <InputSearch placeholder="Pesquise" value={searchValue} onChange={({target}) => setSearchValue(target.value)}/>
  
  </SearchContainer>
  )
}