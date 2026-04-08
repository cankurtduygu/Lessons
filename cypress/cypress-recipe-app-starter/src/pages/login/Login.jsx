import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import meal from "../../assets/meal.svg";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("ASP");

  const user = { username: `${username}` };

  const loginSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} alt="meal" />
        <Header>{`<ASP/>`}Recipe</Header>

        <StyledForm onSubmit={loginSubmit}>
          <StyledInput
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;