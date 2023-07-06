import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ShoppingCartSimple } from "@phosphor-icons/react";

import { Trash, Plus } from '@phosphor-icons/react';

export const BtnCarrinho = styled(Button)`

border: none;
position: relative;
background:#122743;
color: #122743;

&:hover {
  background: #122743;
  opacity: 0.7;
  color: #122743;
}
&:focus,
&:active {
  background: #122743 !important;
  outline: none !important;
  transition: none !important;
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
  width: 10px;
  height: 10.913px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 8px;
  position: absolute;
  right: 7px;
  top: 4px;
  font-weight: 600;

  
`;

export const ModalContainer = styled(Modal)`

.modal-dialog {
    margin-right: 1.25rem;
    margin-top: 3.75rem;
   
  }

  .modal-header {
    border: none;
    margin: 0;
  padding-left: 8px;
  padding-top: 10px;
  padding-bottom: 0;

  }

.modal-footer {
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  padding-bottom: 4.5rem;
  padding-top: 3.6rem;
}

@media (max-width: 750px) {
  .modal-dialog {
    margin-right: 0.625rem;
    margin-top: 2.5rem;
   
  }
}


`;

export const ConatinerCarrinhoProdutos = styled.div`
display: flex;
flex-direction: column;

`;

export const ImgETitleProduct = styled.div`
display: flex;
padding-left: 2.8rem;
padding-top: 4.5rem;

img {
  height: 5.6rem;
  width: 6rem;
  padding-right: 0.9rem;
}

@media (max-width: 750px) {
  padding-left: 0.7rem;
  padding-top: 3rem;
}

`;

export const InfosProdutosCarrinho = styled.div`
display: flex;
flex-direction: column;

span {
  font-size: 1.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  letter-spacing: 0.2px;
color: #000;
}

strong {
  font-size: 1.25rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  letter-spacing: 0.2px;
}

div {
  display: flex;
}


@media (max-width: 750px) {
  span {
    font-size: 1rem;
  }

  strong {
    font-size: 0.9rem;
  }
}


`;

export const ButtonsCarrinho = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;

div {
  display: flex;
}
`;

export const ContainerButtons = styled.div`
display: flex;
justify-content: space-between;
padding-top: 1.31rem;

`

export const ButtonLixeira = styled.button`
position: absolute;
right: 3.18rem;
border: none;
background: transparent;
`;
export const LixeiraProduto = styled(Trash)`
color: #BABABA;
background: transparent;
transition: ease 0.7s;
&:hover {
  color: #A52A2A;
}
`;

export const ButtonMaisEMenos = styled.button`

width: 1.875rem;
height: 1.875rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
font-weight: bold;
text-align: center;
background-color: transparent;
border-radius: 10px;
border: 1px solid #BABABA;
transition:  ease 0.7s;

&:hover{
background-color: #BABABA;
}
`;

export const NumeroQuantidadeCarrinho = styled.span`
color: #000;
font-size: 1rem;
font-family: 'Inter', sans-serif;
font-weight: 400;
letter-spacing: 0.2px;
padding-left: 1.5rem;
padding-right: 1.5rem;
`;

export const MaisIcon = styled(Plus)`
color: #000;
font-weight: bold;
`;

export const BtnComprar = styled(Button)`
width: 20.3rem;
height: 3.1rem;
border-radius: 10px;
background-color: #01E5BD;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 30px;
border: none;
transition: ease 1s;
&:hover{
background: #204376;
}
`;

export const ContainerTotalItens = styled.div`
width: 20.3rem;
margin: 0 auto;
display: flex;
justify-content: space-between;

p{
  font-size: 0.75rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0.2px;
}

span {
  color: #000;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.2px;
}
`;