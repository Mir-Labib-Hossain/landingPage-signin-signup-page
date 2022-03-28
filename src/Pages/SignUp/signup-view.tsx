import { Link } from "react-router-dom";
import { FormProps } from ".";
import { Button, Col2, P, Row, Spanner } from "../../components/Common.styled";
import InputField from "../../components/InputField";
import { Form, FormContainer, SignInContainer, SignUpImg } from "./styled";

const SignUpView: React.FC<FormProps> = ({ isEmail,isEmailHandler }) => {
  return (
    <>
      <SignInContainer>
        <Row>
          <Col2>
            <SignUpImg />
          </Col2>
          <Col2>
            <FormContainer>
              <Form action="">
                <InputField type={isEmail?"email":"number"}  />
                <InputField type="password" />
                <InputField type="password" />
               
                <Button>Sign-Up</Button>
              </Form>
              <P>
                Already have an account ? 
                <Link to="/signin">
                  <Spanner> SignIn</Spanner>
                </Link>
              </P>
            </FormContainer>
          </Col2>
        </Row>
      </SignInContainer>
    </>
  );
};
export default SignUpView;
