import Modal from 'react-bootstrap/Modal';
import { BtnCarrinho, BtnComprar, ButtonLixeira, ButtonMaisEMenos, ButtonsCarrinho, Carrinho,  ConatinerCarrinhoProdutos,  ContainerButtons,  ContainerTotalItens,  ImgETitleProduct,  InfosProdutosCarrinho,  LixeiraProduto,  MaisIcon,  ModalContainer, NumeroCarrinho, NumeroQuantidadeCarrinho } from './styles';
import { useContext, useEffect, useState } from 'react';

import ProductImg from '../../assets/produto.svg'
import { ArrowFatRight, CaretRight, Minus, Plus } from '@phosphor-icons/react';
import { ApiContext } from '../../context/MyContexts';
import { fromatCurrency } from '../../utils/formatCurrency';


interface ProductType {
  id: string
  title: string
  price: number
  thumbnail: string
  quantity?: number; 
  }


export function CarrinhoContainerProdutos() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const {cardItems, SetCardItems} = useContext(ApiContext)





const totalPrice = cardItems.reduce((acc, item) => item.price + acc, 0)

 function handleRemoveItem(itemId: string){
  const updatedCardItems = cardItems.filter(item => item.id !== itemId);
  SetCardItems(updatedCardItems);
}




  return (
    <div>
    <BtnCarrinho onClick={handleShow} >
     <Carrinho size={22} />
    {cardItems.length > 0 && <NumeroCarrinho >{cardItems.length}</NumeroCarrinho>}
     </BtnCarrinho>

    
     
     <ModalContainer  show={show} onHide={handleClose}>
     <Modal.Body>
     {cardItems.map((cartItem: ProductType) => (
          <div key={cartItem.id}>
            <ConatinerCarrinhoProdutos>
         <ImgETitleProduct>
         <img src={cartItem.thumbnail} alt="Produto" />
      
         <InfosProdutosCarrinho>
           <span>{cartItem.title}</span>
           <strong>{fromatCurrency(cartItem.price)}</strong>
      
        <ContainerButtons>
    
      
         <ButtonLixeira onClick={() => handleRemoveItem(cartItem.id)}><LixeiraProduto size={26} /></ButtonLixeira>
         </ContainerButtons>
         </InfosProdutosCarrinho>
         </ImgETitleProduct>
      
         <ButtonsCarrinho>
        
          
         
         </ButtonsCarrinho>
      
        </ConatinerCarrinhoProdutos>
          </div>
        ))}
   
 

  </Modal.Body>
  
  <Modal.Footer>
   <ContainerTotalItens>
     <p>Total {cardItems.length} Items</p>

     <span>{fromatCurrency(totalPrice)}</span>
   </ContainerTotalItens>
    <BtnComprar  onClick={handleClose}>
     <span>Finalizar compra</span>   <CaretRight size={23} />
    </BtnComprar>
  </Modal.Footer>
</ModalContainer>

  
  
     </div>
  )
}