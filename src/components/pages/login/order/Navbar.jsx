import styled from "styled-components";
import NavbarRIghtSide from "./NavbarRIghtSide";
import Logo from "../../../reusable-ui/Logo";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../../utils/window";

export default function Navbar({ username }) {
	return (
		<NavBarStyled>
			<Logo classname={"logo-order-page"} onClick={() => refreshPage()} />
			<NavbarRIghtSide username={username} />
		</NavBarStyled>
	);
}

const NavBarStyled = styled.nav` 
background: ${theme.colors.white} ;
height: 10vh;
display: flex;
justify-content: space-between;
padding: 0 20px;
border-top-right-radius: ${theme.borderRadius.extraRound};
border-top-left-radius: ${theme.borderRadius.extraRound};

.logo-order-page{
	cursor:pointer;
}
`;
