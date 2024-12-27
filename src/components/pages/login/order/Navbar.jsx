import styled from "styled-components";
import NavbarRIghtSide from "./NavbarRIghtSide";
import Logo from "../../../reusable-ui/Logo";

export default function Navbar({ username }) {
	return (
		<NavBarStyled>
			<Logo />
			<NavbarRIghtSide username={username} />
		</NavBarStyled>
	);
}

const NavBarStyled = styled.nav`    
background: blue;
height: 10vh;
display: flex;
justify-content: space-between;
padding: 0 20px;
`;
