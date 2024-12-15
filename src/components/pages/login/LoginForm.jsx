import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";


export default function LoginForm() {
	const [inputValue, setInputValue] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		setInputValue("");
		navigate(`order/${inputValue}`);
	};

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};
	return (
		<LoginFormStyled action="submit" onSubmit={handleSubmit}>
			<h1>Bienvenue chez nous !</h1>
			<hr/>
			<h2>Connectez-vous</h2>
			<TextInput
				value={inputValue}
				onChange={handleChange}
				placeholder={"Entrez votre prénom"}
				required
				Icon={<BsPersonCircle className="icon"/>}
				className={"input-with-icon"}
			/>
			<button className="button-with-icon">
				<span>Accéder à mon espace</span>
				<IoChevronForward className="icon" />
			</button>
		</LoginFormStyled>
	);
}

const LoginFormStyled = styled.form`
text-align: center;
max-width: 500px;
min-width: 400px;
margin: 0px auto;
border-radius: 5px;
font-family: "Amatic SC", cursive;

display: flex;
flex-direction:column;

hr{
width:100%;
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

.button-with-icon{
	display:inline-flex;
	background: orange;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	white-space: nowrap;
	text-decoration: none;
	line-height: 1;

	padding:18px 24px;
	margin: 18px 0;
	font-size: 15px;
	font-weight:800;
	color: white;
	background-color: #ff9f1b;
	border: 1px solid #ff9f1b;

&:hover:not(:disabled){
	background-color: white;
	color: #ff9f1b;
	border: 1px solid #ff9f1b;
	transition: all 200ms ease-in-out;

}	


&:active{
	color:white;
	background-color: #ff9f1b;
	border: 1px solid #ff9f1b;
}


&:disabled{
	opacity: 0.6;
	cursor: not-allowed
}
}

`;
