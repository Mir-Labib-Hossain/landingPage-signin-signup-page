import { useState } from "react";
import SignInView from "./signin-view";
export interface FormProps {
  isEmail: boolean;
  isEmailHandler: Function;
}
const SignIn: React.FC = () => {
  const [isEmail, setIsEmail] = useState(true);
  const isEmailHandler = () => {
    setIsEmail(!isEmail);
  };

  return (
    <>
      <SignInView isEmail={isEmail} isEmailHandler={isEmailHandler} />
    </>
  );
};
export default SignIn;
