
import Logo from '../../assets/logo.svg'
import {  HeaderBox, HeaderContainer } from './styles';
import { CarrinhoContainerProdutos } from '../Carrinho';


export function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
      <HeaderContainer >
      <HeaderBox>
        <button onClick={scrollToTop}>
      <img src={Logo}  />
      </button>

     <CarrinhoContainerProdutos />
      </HeaderBox>
      </HeaderContainer>
     
  )
}