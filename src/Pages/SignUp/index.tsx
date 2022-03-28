import { useState } from "react";
import SignUpView from "./signup-view";
export interface FormProps {
  isEmail: boolean;
  isEmailHandler: Function;
}
const SignUp: React.FC = () => {
  const [isEmail, setIsEmail] = useState(true);
  const isEmailHandler = () => {
    setIsEmail(!isEmail);
  };

  return (
    <>
      <SignUpView isEmail={isEmail} isEmailHandler={isEmailHandler} />
    </>
  );
};
export default SignUp;
