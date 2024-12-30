import styled from "styled-components";
import Profile from "../Navbar/Profile";

export default function NavbarRIghtSide({ username }) {
	return (
		<NavbarRIghtSideStyled>
			<Profile username={username} />
		</NavbarRIghtSideStyled>
	);
}

const NavbarRIghtSideStyled = styled.div`
display: flex;
align-items: center;
padding-right: 50px;




.profile{
	background: violet;
}
`;
