import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import logo from "../../assets/images/logo-orange.png";

export default function Logo({ classname }) {
	return (
		<LogoStyled className={classname}>
			<h1>CRAZEE</h1>
			<img src={logo} alt="logo-crazee-burger" />
			<h1>BURGER</h1>
		</LogoStyled>
	);
}

const LogoStyled = styled.div`

color: white;
display: flex;
align-items: center;

h1 {
  display: inline;
  text-align: center;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P4}; 
  line-height: 1em; 
  font-weight: ${theme.fonts.weight.bold};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-family: "Amatic SC", cursive;
}

img {
  object-fit: contain;
  object-position: center;
  height: 60px; 
  width: 5rem; 
  margin: 0 5px; 
}
`;
