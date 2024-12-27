import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
	return (
		<NavBarStyled>
			<h1>Bonjour {username}</h1>
			<Link to="/">
				<button type="button">Déconnexion</button>
			</Link>
		</NavBarStyled>
	);
}

const NavBarStyled = styled.nav`    
background: blue;
height: 10vh;
`;
