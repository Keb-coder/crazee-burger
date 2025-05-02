import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
	const {
		isCollapsed,
		setIsCollapsed,
		isAddTabSelected,
		setisAddTabSelected,
		isEditTabSelected,
		setIsEditTabSelected,
	} = useContext(OrderContext);

	const handleClick = () => {
		setIsCollapsed(!isCollapsed);
	};

	const selectedAddTab = () => {
		setIsCollapsed(false);
		setisAddTabSelected(true);
		setIsEditTabSelected(false);
	};

	const selectedEditTab = () => {
		setIsEditTabSelected(true);
		setisAddTabSelected(false);
	};

	return (
		<AdminTabsStyled>
			<Tab
				label=""
				Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
				onClick={handleClick}
				className={isCollapsed ? "is-active" : ""}
			/>

			<Tab
				label="Ajouter un produit"
				Icon={<AiOutlinePlus />}
				onClick={selectedAddTab}
				className={isAddTabSelected ? "is-active" : ""}
			/>
			<Tab
				label="Modifier un produit"
				Icon={<MdModeEditOutline />}
				onClick={selectedEditTab}
				className={isEditTabSelected ? "is-active" : ""}
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
button{
	margin-left : 1px;
}
`;
