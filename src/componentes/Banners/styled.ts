import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Image1 from '../../assets/Banner1.png'
import Image2 from '../../assets/Banner2.png'
import Image3 from '../../assets/Banner3.png'
import Mobile1 from '../../assets/Bannermobi1.png'
import Mobile2 from '../../assets/Bannermobi2.png'
import Mobile3 from '../../assets/Bannermobi3.png'

export const CaroselContainer = styled(Carousel)`
max-width: 1440px;
height: 760px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;

@media (max-width: 750px) {
  width: 24.37rem;
height: 20.62rem;
}
`;

export const ImgBanner1 = styled.img`
 background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
height: 760px;
border-radius: 5px;
background: url(${Image1});
margin: 0 auto;

@media (max-width: 750px) {
  background: url(${Mobile1});
height: 20.62rem;
}

`
export const ImgBanner2 = styled.img`
 background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
object-fit: cover;
height: 47.5rem;
border-radius: 5px;
background: url(${Image2});

@media (max-width: 750px) {
  background: url(${Mobile2});
height: 20.62rem;
}

`

export const ImgBanner3 = styled.img`
object-fit: cover;
height: 47.5rem;
object-position: top;
border-radius: 5px;
background: url(${Image3});

@media (max-width: 750px) {
  
  background: url(${Mobile3});
height: 20.62rem;
}

`