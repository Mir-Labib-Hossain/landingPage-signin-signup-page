import styled from "styled-components";
import { Col4, Icon, P } from "../Common.styled";

export const Footer = styled.div`
  transition: 1.5s;
  background-color: ${({ theme }) => theme.themeBg};
  padding: 5%;
  ${Icon} {
    font-size: 40px;
  }
  ${Col4} {
    ${P} {
      margin: 5px 0;
      font-size: 13px;
    }
  }
`;
export const SocialTab = styled.div`
  margin: 1%;
  margin-bottom: 30px;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.themeText};
  font-size: 17px;
  font-family: "Oswald", sans-serif;
  border-bottom: 1px solid ${({ theme }) => theme.themeColor};
  margin-bottom: 5px;
  padding-bottom: 3px;
`;
export const Apps = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid grey;
  border-radius: 10px;
  margin-right: 3px;
  padding: 3px;
  @media screen and (max-width: 750px) {
    & {
      display: grid;
      place-content: center;
    }
    p {
      display: none;
    }
    i {
      margin: 0;
    }
  }
`;
