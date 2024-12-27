import styled from "styled-components";
import NavbarRIghtSide from "./NavbarRIghtSide";

export default function Navbar({ username }) {
	return (
		<NavBarStyled>
			<div className="left-side">Left</div>
			<NavbarRIghtSide username={username} />
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
`;
