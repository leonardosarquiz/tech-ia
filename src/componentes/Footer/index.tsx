import { ContainerContatos, FooterContainer, FooterLeft, FooterRight, LinksContainer, RedeSocialContainer } from "./styles";
import Logo from '../../assets/logo.svg'
import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import { useEffect } from "react";


export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const scrollToSearch = () => {
    window.scrollTo({ top: 295, behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    window.scrollTo({ top: 361, behavior: 'smooth' });
  };





  return (
    <FooterContainer>
     <FooterLeft>
      <img src={Logo}  />

      <ContainerContatos>
        <p>Fale com a gente</p>
        <a href="/">tech.ia@info.com</a>
        <a href="/">techia@techia.com.br</a>
      </ContainerContatos>
     </FooterLeft>


     <FooterRight>
      <LinksContainer>
      <p>Links Úteis</p>
      <button onClick={scrollToTop}>Home</button>
      <button onClick={scrollToSearch}>Pesquisa</button>
      <button onClick={scrollToProducts}>Produtos</button>
      </LinksContainer>


      <RedeSocialContainer>
        <p>Social</p>
        <a href="https://www.linkedin.com/in/leonardosarquiz/"><TwitterLogo size={30} /></a>
        <a href="https://www.linkedin.com/in/leonardosarquiz/"><InstagramLogo size={30} /></a>
        <a href="https://www.linkedin.com/in/leonardosarquiz/"><FacebookLogo size={30} /></a>
      </RedeSocialContainer>

     </FooterRight>
    </FooterContainer>
  )
}