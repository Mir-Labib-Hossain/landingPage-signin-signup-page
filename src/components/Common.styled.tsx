import styled from "styled-components";
export const Icon = styled.i`
  color: ${({ theme }) => theme.themeColor};
`;
export const P = styled.p`
  color: ${({ theme }) => theme.themeText};
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
export const Col4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  margin: 1%;

  @media screen and (max-width: 600px) {
    width: 48%;
  }
`;
export const Col2 = styled.div`
  flex-direction: column;
  display: flex;
  width: 50%;
`;
export const Spanner = styled.span`
  color: ${({ theme }) => theme.themeColor};
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.themeColor};
  color: ${(props) => props.theme.themeText};
  width: max-content;
  outline: none;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  padding: 10px;
  margin: auto;
  border: 2px solid transparent;
  transition: 0.5s;
  :hover {
    background-color: transparent;
    color: ${(props) => props.theme.themeColor};
    border: 2px solid ${(props) => props.theme.themeColor};
    cursor: pointer;
  }
`;
