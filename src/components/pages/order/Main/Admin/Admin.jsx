import React, { useState } from "react";
import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<AdminStlyed>
			<AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
			{!isCollapsed && <AdminPanel />}
		</AdminStlyed>
	);
}

const AdminStlyed = styled.div`
    position: absolute;
    bottom:0;
    left:0;
    right:0;
`;
