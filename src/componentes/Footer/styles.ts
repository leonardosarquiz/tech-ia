import styled from "styled-components";


export const FooterContainer = styled.footer`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 10.8rem;
@media (max-width: 750px) {
  margin-top: 4.875rem;
}


`;

export const FooterLeft = styled.div`

display: flex;
flex-direction: column;

padding-left: 2.6rem;
padding-bottom: 3.5rem;

@media (max-width: 750px) {
  padding-left: 1.75rem;

  img{
    width: 8rem;
    height: 1.93rem;
  }
}
`;

export const ContainerContatos = styled.div`
display: flex;
flex-direction: column;
padding-top: 8.1rem;

p {
  color: #F5F5F5;
  font-size: 0.75rem;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
}
a {
  margin: 0;
  padding: 0;
 text-decoration: 0;
 color: #F5F5F5;
 &:hover {
    opacity: 0.7;
  }
}


@media (max-width: 750px) {
  a, p {
    font-size: 0.75rem;
  }
}
`;

export const FooterRight = styled.div`
  margin-right: 8rem;
  display: flex;
  @media (max-width: 750px) {
    margin-right: 2.56rem;
    margin-top: 0.625rem;
  }
`;

export const LinksContainer = styled.div`
display: flex;
flex-direction: column;
padding-right: 13.6rem;

p{
  font-size: 0.9rem;
  color: #F5F5F5;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  
}

button {
  text-decoration: none;
  color: #F5F5F5;
 background: none;
 border: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  &:hover {
    opacity: 0.7;
  }
}
button + button {
  padding-top: 1rem;
}

@media (max-width: 750px) {
  padding-right: 1.687rem;


  p {
    font-size: 0.75rem;
  }
  button {
    font-size: 0.75rem;
  }


  
}
`;

export const RedeSocialContainer = styled.div`
display: flex;
flex-direction: column;

p {
  font-size: 0.9rem;
  color: #F5F5F5;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
}

a {
  text-decoration: none;
  color: #F5F5F5;
  margin: 0 auto;

  &:hover {
    opacity: 0.7;
  }
}

a + a {
  padding-top: 0.4rem;
}

@media (max-width: 750px) {
  p {
    font-size: 0.75rem;
  }
}
`;
