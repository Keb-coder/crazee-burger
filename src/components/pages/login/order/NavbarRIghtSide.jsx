import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavbarRIghtSide({ username }) {
	return (
		<NavbarRIghtSideStyled>
			<h1>Hey {username}</h1>
			<Link to="/">
				<button type="button">Déconnexion</button>
			</Link>
		</NavbarRIghtSideStyled>
	);
}

const NavbarRIghtSideStyled = styled.div`
background: yellow;	
`;
