import styled from "styled-components";
import { Button, Col2, P, Spanner } from "../../components/Common.styled";

export const SignInContainer = styled.div`
  background-color: ${({ theme }) => theme.themeBg};

  @media screen and (max-width: 1100px) {
    ${Col2} {
      width: auto;
    }
  }
  ${Button} {
    width: 100%;
  }
`;
export const SignUpImg = styled.div`
  background-image: url(./images/Signup.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
export const FormContainer = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  @media screen and (max-width: 1100px) {
    width: 100vw;
  }
  ${P}:nth-last-child(1) {
    text-align: center;
    font-size: 13px;
    margin: 10px;
  }
`;
export const Form = styled.form`
  width: 400px;
  ${Spanner} {
    text-align: right;
    font-size: 13px;
    margin-bottom: 10px;
    float: right;
  }
`;
