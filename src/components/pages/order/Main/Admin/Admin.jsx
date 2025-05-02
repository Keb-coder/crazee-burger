import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
	return (
		<AdminStlyed>
			<AdminTabs />
			<AdminPanel />
		</AdminStlyed>
	);
}

const AdminStlyed = styled.div`
    position: absolute;
    bottom:0;
    left:0;
    right:0;
`;
