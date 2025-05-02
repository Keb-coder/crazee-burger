import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function Admin() {
	const { isCollapsed } = useContext(OrderContext);
	return (
		<AdminStlyed>
			<AdminTabs />
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
