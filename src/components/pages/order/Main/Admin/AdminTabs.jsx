import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "./Tab";
import { FiChevronDown } from "react-icons/fi";

export default function AdminTabs() {
	return (
		<AdminTabsStyled>
			<Tab Icon={<FiChevronDown />} />
		</AdminTabsStyled>
	);
}

const AdminTabsStyled = styled.div`

`;
