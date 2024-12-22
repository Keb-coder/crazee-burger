import styled from "styled-components";

export default function PrimaryButton({ label, Icon }) {
	return (
		<PrimaryButtonStyled>
			<span>{label}</span>
			{Icon && Icon}
		</PrimaryButtonStyled>
	);
}

const PrimaryButtonStyled = styled.button`
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
`;
