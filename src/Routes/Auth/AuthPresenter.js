import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "Components/Button";
import Input from "Components/Input";

const Wrapper = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  max-width: 350px;
  width: 100%;
  ${(props) => props.theme.whiteBox};
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const VerifyAccount = styled.div`
  margin: 15px;
  font-size: 13px;
  font-weight: 300;
  color: ${(props) => props.theme.blackColor};
`;

const ChangeState = styled.span`
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => props.theme.blueColor};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const AuthPresenter = ({
  setAction,
  action,
  userName,
  email,
  firstName,
  onLogIn,
}) => (
  <Wrapper>
    {action === "logIn" ? (
      <>
        <Box>
          <Form>
            <Input placeholder={"Email"} {...email} type={"email"} />
            <Input placeholder={"First Name"} {...firstName} />
            <Input placeholder={"Username"} {...userName} />
            <Button text={"Sign Up"} />
          </Form>
        </Box>
        <Box>
          <VerifyAccount>
            Have an account?{" "}
            <ChangeState onClick={() => setAction("signUp")}>
              Log in
            </ChangeState>
          </VerifyAccount>
        </Box>
      </>
    ) : (
      <>
        <Box>
          <Form onSubmit={onLogIn}>
            <Input placeholder={"Email"} {...email} type={"email"} />
            <Button text={"Log In"} />
          </Form>
        </Box>
        <Box>
          <VerifyAccount>
            Don't have an account?{" "}
            <ChangeState onClick={() => setAction("logIn")}>
              Sign up
            </ChangeState>
          </VerifyAccount>
        </Box>
      </>
    )}
  </Wrapper>
);

AuthPresenter.propTypes = {
  setAction: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  userName: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
  email: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
  firstName: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
  onLogIn: PropTypes.func.isRequired,
};

export default AuthPresenter;