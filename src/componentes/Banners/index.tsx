//import { BannerContainer } from "./styles";
import Carousel from 'react-bootstrap/Carousel';


//import styles from './Banner.module.css';


import { CaroselContainer, ImgBanner1, ImgBanner2, ImgBanner3 } from './styled';





export function Banners() {
  return (
    
    <CaroselContainer className='Container'>
    <Carousel.Item className='Container'>
      <ImgBanner2
        className="d-block w-100  imgContainer"
      
        alt="First slide"

      
      />
    </Carousel.Item>
    <Carousel.Item className='Container'>
      <ImgBanner1
        className="d-block w-100 imgContainer"
        
        alt="Second slide"
      />

      
    </Carousel.Item>
    <Carousel.Item className='Container'>
      <ImgBanner3
        className="d-block w-100 imgContainer"
       
        alt="Third slide"
      />

      
    </Carousel.Item>
  </CaroselContainer>
 
  )
}