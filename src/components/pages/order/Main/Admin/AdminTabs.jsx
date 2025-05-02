import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
	const handleClick = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<AdminTabsStyled>
			<Tab
				Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
				onClick={handleClick}
				className={isCollapsed ? "is-active" : ""}
			/>
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
`;
