import React from "react";
import styled from "styled-components";

export default function Logo() {
	return (
		<LogoStyled>
			<h1>CRAZEE</h1>
			<img src="src/assets/images/logo-orange.png" alt="logo-crazee-burger" />
			<h1>BURGER</h1>
		</LogoStyled>
	);
}

const LogoStyled = styled.div`

color: white;
display: flex;
align-items: center;
transform: scale(2.5);

h1 {
  display: inline;
  text-align: center;
  color: #ffa01b;
  font-size: 2.25rem; 
  line-height: 1em; 
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09375rem;
  font-family: "Amatic SC", cursive;
}

img {
  object-fit: contain;
  object-position: center;
  height: 3.75rem; 
  width: 5rem; 
  margin: 0 0.3125rem; 
}
`;
