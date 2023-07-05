import styled from "styled-components";

export const SearchContainer = styled.form`
padding-top: 3.6rem;
padding-bottom: 5.1rem;
display: flex;
justify-content: center;
background-color: #122743;

@media (max-width: 450px) {
  padding-top: 1rem;
  padding-bottom: 42px;
}

`;

export const InputSearch = styled.input`
  width: 74.2rem;
  height: 3.875rem;
  border-radius: 10px;
  margin-left: 8rem;
 margin-right: 8rem;
  outline: none;
  color: #000;
  padding-left: 22px;
  font-size: 1.12rem;
  border: none;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 20px;
letter-spacing: 0.2px;
  
  &::placeholder {
    color: #BABABA;
    font-size: 1.12rem;
    font-family: 'Inter', sans-serif;
  font-weight: 400;
  }

  &:active {
    outline: none;
  }


  @media (max-width: 450px) {
    width: 305px;
    height: 35px;

    &::placeholder {
      font-size: 12px;
    }
  }

`;