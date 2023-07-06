import styled from "styled-components";


export const ContainerProducts = styled.section`


display: flex;
justify-content: center;


`;
export const ContainerProductsa = styled.div`
width: 74.2rem;
 margin-left: 8rem;
 margin-right: 8rem;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 2.8rem;

 @media (max-width: 750px) {
  gap: 1.25rem;
  grid-template-columns: repeat(2, 1fr);
 }



`;

export const Product = styled.div`
height: 28.8rem;
width: 22.8rem;
background-color: #fff;
border-radius: 15px;
display: flex;
flex-direction: column;
position: relative;


img {
  border-radius: 15px;
width: 15.31rem;
  height: 16.68rem;
  margin: 0 auto;
}

h4{
  font-size: 1.18rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  padding-left: 3.18rem;
  padding-right: 1rem;
  padding-top: 1.7rem;
  display: flex;

}

p {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 1.3rem;
 
 position: absolute;
 left: 3.43rem;
 bottom: 4.31rem;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.1rem;
  height: 3.0rem;
 
 

  border-radius: 6px;
  border: none;
  background-color: #01E5BD;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: #ffff;
  font-size: 0.9rem;
  position: absolute;
  margin: 0 auto;
  bottom: 19px;
 left: 86px;
 right: 85px;

 transition: ease 1s;
&:hover{
background: #204376;
}
}


@media (max-width: 750px) {
  width:8.1rem;
  height: 10.2rem;

  img {
    width: 5.125rem;
    height: 5.5625rem;
  }
  h4 {
    font-size: 0.5rem;
    padding-left:1.125rem;
  padding-right:5px;
  padding-top: 5px;
  }
  p {
    font-size: 0.625rem;
    left: 1.25rem;
    bottom: 1rem;
  }
  button {
    width: 6.93rem;
    height: 1.43rem;
    font-size: 0.5rem;
    bottom: 7px;
    left: 9px;
  }
}

`;
