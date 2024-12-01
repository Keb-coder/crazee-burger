import styled from "styled-components";
import LoginForm from "./LoginForm";
import burgerBackground from "../../../assets/images/burger-background.jpg";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
	return (
		<LoginPageStyled>
			<Logo />
			<LoginForm />
		</LoginPageStyled>
	);
}

const LoginPageStyled = styled.div` 
  box-sizing: border-box;
  background-image: url(${burgerBackground});
  height: 100vh;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`;
