import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm() {
	const [inputValue, setInputValue] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		setInputValue("");
		navigate(`order/${inputValue}`);
	};

	const handleCHange = (event) => {
		setInputValue(event.target.value);
	};
	return (
		<LoginFormStyled action="submit" onSubmit={handleSubmit}>
			<h1>Bienvenue chez nous !</h1>
			<h3>Connectez-vous</h3>
			<input
				id="connexion"
				value={inputValue}
				onChange={handleCHange}
				type="text"
				name="Idendifiant"
				placeholder="Entrez votre prénom"
				required
			/>

			<button type="submit" id="connexionButton">
				Accéder à mon espace
			</button>
		</LoginFormStyled>
	);
}

const LoginFormStyled = styled.div`
background: blue;
display: flex;
flex-direction:column;
`;
