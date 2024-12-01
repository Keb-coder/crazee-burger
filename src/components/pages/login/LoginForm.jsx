import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
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
			<hr />
			<h2>Connectez-vous</h2>
              <div className="input-with-icon">
			  <BsPersonCircle className="icon" />
				<input
					id="connexion"
					value={inputValue}
					onChange={handleCHange}
					type="text"
					name="Idendifiant"
					placeholder="Entrez votre prénom"
					required
				/> 
              </div>

			<button type="submit" id="connexionButton">
				Accéder à mon espace
			</button>
		</LoginFormStyled>
	);
}

const LoginFormStyled = styled.div`
background: blue;
text-align: center;
max-width: 500px;
min-width: 400px;
margin: 0px auto;
border-radius: 5px;
font-family: "Amatic SC", cursive;

display: flex;
flex-direction:column;

hr{
width:80%;
border: 1px solid #f56a2c;
margin-bottom:40px;
}

h1{
	color: white;
	font-size:48px
}

h2{
	margin: 20px 10px 10px;
	color: white;
	font-size: 36px;
}

.input-with-icon{
	background-color: #fff;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding:18px 24px;
	margin: 18px 0;
}

.icon {
	color: yellow;
	font-size: 15px;
	margin-right: 8px;
	color: #93a2b1;;
}

input{
	border: none;
	font-size: 15px;
}

&::placeholder{
	background: white;
	color:lightgrey;
}
`;
