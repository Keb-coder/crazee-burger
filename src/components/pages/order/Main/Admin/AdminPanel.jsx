import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminPanel() {
	const { isAddTabSelected, isEditTabSelected } = useContext(OrderContext);
	return (
		<AdminPanelsStyled>
			{isAddTabSelected && "Ajouter un produit"}
			{isEditTabSelected && "Modifer un produit"}
		</AdminPanelsStyled>
	);
}

const AdminPanelsStyled = styled.div`
  height:250px;
  background:${theme.colors.white};
  border: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
