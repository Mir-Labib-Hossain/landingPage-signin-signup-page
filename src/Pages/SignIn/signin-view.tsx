import { Link } from "react-router-dom";
import { FormProps } from ".";
import { Button, Col2, P, Row, Spanner } from "../../components/Common.styled";
import InputField from "../../components/InputField";
import { Form, FormContainer, SignInContainer, SignInImg } from "./styled";

const SignInView: React.FC<FormProps> = ({ isEmail,isEmailHandler }) => {
  return (
    <>
      <SignInContainer>
        <Row>
          <Col2>
            <SignInImg />
          </Col2>
          <Col2>
            <FormContainer>
              <Form action="">
                <InputField type={isEmail?"email":"number"}  />
                <InputField type="password" />
                <Link to="/forgot_password">
                  <Spanner>Forgot password?</Spanner>
                </Link>
                <Button>Sign-In</Button>
              </Form>
              <P>
                Dont't have an account?{" "}
                <Link to="/signup">
                  <Spanner>SignUp Now.</Spanner>
                </Link>
              </P>
            </FormContainer>
          </Col2>
        </Row>
      </SignInContainer>
    </>
  );
};
export default SignInView;
