import { FormProps } from "../../Pages/SignIn";
import InputFieldView from "./input-field-view";
export interface InputProps{
  type:string
}
const InputField: React.FC <InputProps> = ({type}) => {
  return (
    <>
      <InputFieldView type={type}/>
    </>
  );
};
export default InputField;
