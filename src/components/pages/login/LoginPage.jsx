import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
	return (
		<LoginPageStyled>
			<Logo classname={"logo-login-page"} />
			<LoginForm />
		</LoginPageStyled>
	);
}

const LoginPageStyled = styled.div` 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

&::before{
  content: "";
  background: url("src/assets/images/burger-background.jpg") rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  

  position:absolute;
        top: 0;
        left: 0;
        right:0;
        bottom:0;
        z-index: -1;
  }

  .logo-login-page{
    transform: scale(2.5);
  }
`;
