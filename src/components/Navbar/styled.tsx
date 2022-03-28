import styled from "styled-components";
import { Spanner } from "../Common.styled";

//   export const Nav = styled.nav<{ scrolled: boolean }>`
export const Nav = styled.nav`
  /* background: linear-gradient(to bottom, ${({ theme }) => (!theme.scrolled ? "transparent" : theme.themeBg)}, transparent); */
  background: ${({ theme }) => (!theme.scrolled ? "transparent" : theme.themeBg)};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  z-index: 10;
  width: 100vw;
  padding: 0 5%;
  transition: 0.8s all ease;
`;

export const Title = styled.h1`
  
  font-family: "Bebas Neue", cursive;
${Spanner}{
  font-family: "Bebas Neue", cursive;
}
  font-size: 30px;
  /* color: ${({ theme }) => (!theme.scrolled ? "black" : theme.themeText)}; */
  color: ${({ theme }) => theme.themeText};
  @media screen and (max-width: 600px) {
    margin-right: 50px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkBox = styled.div`
  display: flex;
  padding: 0 10px;
  min-width: 100px;
  align-items: center;
  cursor: pointer !important;
  i{
    /* color: ${({ theme }) => (!theme.scrolled ? "black" : theme.themeColor)}; */
    color: ${({ theme }) => theme.themeColor};
  }
  @media screen and (max-width: 600px) {
    min-width: fit-content;
    i {
      font-size: 25px;
    }
  }
`;


export const P = styled.p`
  /* color: ${({ theme }) => (!theme.scrolled ? "black" : theme.themeText)}; */
  color: ${({ theme }) => theme.themeText};

  font-weight: bold;
  transition: all.5s;
  &:hover {
    color: gray;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const PButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  font-size: 17px;
  align-items: center;
  cursor: pointer !important;
  i {
    transform: ${({ theme }) => (theme.ThemeText === "black" ? "rotate(180deg)" : null)};
  }
`; 