import { ShoppingCartSimple } from "@phosphor-icons/react";
import styled from "styled-components";





export const HeaderContainer = styled.header`
width: 100%;
height: 4.93rem;
background: #122743;
position: fixed;
z-index: 3;

@media (max-width: 450px) {
height: 2.6rem;
}
`;


export const HeaderBox = styled.div`

margin-left: 6.6rem;
margin-right: 2.1rem;
height: 4.93rem;
display:flex;
align-items: center;
justify-content: space-between;

button {
  background: none;
  border: none;
}

@media (max-width: 450px) {
height: 2.6rem;
margin-left: 1.56rem;
margin-right: 1.56rem;

img {
  width: 77px;
  height: 18px;
}
}

`;


export const BtnCarrinho = styled.button`

border: none;
position: relative;
background:#122743;
color: #122743;

&:hover {

  opacity: 0.7;

}

`;

export const Carrinho = styled(ShoppingCartSimple)`
color: #F5F5F5;
transition: 2.s;

&:hover {
  opacity: 0.8;
}
`;

export const NumeroCarrinho = styled.span`
  background: #01E5BD;
  width: 15px;
  height: 14.913px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 11px;
  position: absolute;
  right: -3px;
  top: 0px;
  font-weight: 600;

  
`;



