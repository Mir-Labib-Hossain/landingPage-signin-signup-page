import styled from "styled-components";
import { Icon, P } from "../Common.styled";

export const Input = styled.input`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 15px;
  :focus {
    outline: none;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: white;
  }
`;

export const InputContainer = styled.div`
  ${P} {
    font-size: 13px;
    opacity: 0.5;
  }
`;
export const InputBox = styled.div`
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: grey;
  border: 2px solid transparent;
  :focus-within {
    border: 2px solid ${({ theme }) => theme.themeColor};
  }
  ${Icon} {
    color: ${({ theme }) => theme.themeColor};
  }
`;

// export const Input = styled.input`
//  `
