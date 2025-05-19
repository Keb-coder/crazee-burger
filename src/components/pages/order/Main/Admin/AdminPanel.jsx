import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig, getTabSelected } from "./getTabsConfig";

export default function AdminPanel() {
	const { currentTabSelected } = useContext(OrderContext);
	const tabs = getTabsConfig(currentTabSelected);
	const tabSelected = getTabSelected(tabs, currentTabSelected);

	return (
		<AdminPanelsStyled>
			{currentTabSelected === tabSelected.index && tabSelected.label}
		</AdminPanelsStyled>
	);
}

const AdminPanelsStyled = styled.div`
  height:250px;
  background:${theme.colors.white};
  border: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
