import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
	const {
		isCollapsed,
		setIsCollapsed,
		currentTabSelected,
		setCurrentTabSelected,
	} = useContext(OrderContext);

	const selectedTab = (tabSelected) => {
		setIsCollapsed(false);
		setCurrentTabSelected(tabSelected);
	};

	const tabs = getTabsConfig(currentTabSelected);

	return (
		<AdminTabsStyled>
			<Tab
				label=""
				Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
				onClick={() => setIsCollapsed(!isCollapsed)}
				className={isCollapsed ? "is-active" : ""}
			/>

			{tabs.map((tab) => (
				<Tab
					key={tab.label} // Ajoute une key si possible
					label={tab.label}
					Icon={tab.Icon}
					onClick={() => selectedTab(tab.index)}
					className={currentTabSelected === tab.index ? "is-active" : ""}
				/>
			))}
		</AdminTabsStyled>
	);
}

const AdminTabsStyled = styled.div`

display:flex;
padding: 0 20px; 

.is-active {
	background: ${theme.colors.background_dark};
	border-color: ${theme.colors.background_dark};
	color: ${theme.colors.white}; 
}
button{
	margin-left : 1px;
}
`;
