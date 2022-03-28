import { useEffect, useState } from "react";
import { InputProps } from ".";
import { Icon, P } from "../Common.styled";
import { Input, InputBox, InputContainer } from "./styled";

const InputFieldView: React.FC<InputProps> = ({ type }) => {
  const [details, setDetails] = useState({
    title: "",
    icon: <Icon className="fa-solid fa-phone"></Icon>,
  });
  const getInputInfo = () => {
    switch (type) {
      case "email":
        setDetails({ title: "Email", icon: <Icon className="fa-solid fa-envelope"></Icon> });
        break;
      case "phone":
        setDetails({ title: "Phone Number", icon: <Icon className="fa-solid fa-phone"></Icon> });
        break;
      case "password":
        setDetails({ title: "Password", icon: <Icon className="fa-solid fa-lock"></Icon> });
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    getInputInfo();
  }, []);

  return (
    <>
      <InputContainer>
        <P>{details.title}</P>
        <InputBox>
        {details.icon}
          <Input placeholder={"Enter your "+details.title.toLowerCase()} type={type} />
        </InputBox>
      </InputContainer>
    </>
  );
};
export default InputFieldView;
