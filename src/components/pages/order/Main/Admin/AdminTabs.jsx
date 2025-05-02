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

	const selectedTab = (tabSelected) => {
		setIsCollapsed(false);

		if (tabSelected === "add") {
			setisAddTabSelected(true);
			setIsEditTabSelected(false);
		}

		if (tabSelected === "edit") {
			setIsEditTabSelected(true);
			setisAddTabSelected(false);
		}
	};

	const tabsConfig = [
		{
			label: "",
			Icon: isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
			onClick: () => setIsCollapsed(!isCollapsed),
			className: isCollapsed ? "is-active" : "",
		},
		{
			label: "Ajouter un produit",
			Icon: <AiOutlinePlus />,
			onCLick: () => selectedTab("add"),
			className: isAddTabSelected ? "is-active" : "",
		},
		{
			label: "Modifier un produit",
			Icon: <MdModeEditOutline />,
			onCLick: () => selectedTab("edit"),
			className: isEditTabSelected ? "is-active" : "",
		},
	];
	return (
		<AdminTabsStyled>
			{/* <Tab
				label=""
				Icon={}
				onClick={}
				className={}
			/>

			<Tab
				label="Ajouter un produit"
				Icon={<AiOutlinePlus />}
				onClick={() => selectedTab("add")}
				className={isAddTabSelected ? "is-active" : ""}
			/>
			<Tab
				label="Modifier un produit"
				Icon={<MdModeEditOutline />}
				onClick={() => selectedTab("edit")}
				className={isEditTabSelected ? "is-active" : ""}
			/> */}
			{tabsconfig.map((tab) => (
				<Tab
					key={tab.label} // Ajoute une key si possible
					label={tab.label}
					Icon={tab.Icon}
					onClick={tab.onClick}
					className={tab.className}
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
