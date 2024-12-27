import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function OrderPage() {
	const { username } = useParams();
	return (
		<OrderPageStyled>
			<div className="container">
				<div className="navbar">
					navbar
					<h1>Bonjour {username}</h1>
					<Link to="/">
						<button type="button">Déconnexion</button>
					</Link>
				</div>
				<div className="main">Main</div>
			</div>
		</OrderPageStyled>
	);
}

const OrderPageStyled = styled.div`
height: 100vh;
background: orange;
display: flex;
justify-content: center;
align-items: center;

.container{
  background: red;
  height: 95vh;
  width: 1400px;
  display: flex;
  flex-direction: column;

.navbar{
background: blue;
height: 10vh;
}
.main{
  background: green;
  flex: 1;

}

}
`;
