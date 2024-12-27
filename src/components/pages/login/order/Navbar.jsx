import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
	return (
		<NavBarStyled>
			<div className="left-side">Left</div>
			<div className="right-side">
				Right
				<h1>Hey {username}</h1>
				<Link to="/">
					<button type="button">Déconnexion</button>
				</Link>
			</div>
		</NavBarStyled>
	);
}

const NavBarStyled = styled.nav`    
background: blue;
height: 10vh;
display: flex;
justify-content: space-between;

.left-side{
background: violet;
}
.right-side{
	background: yellow;	
}	
`;
