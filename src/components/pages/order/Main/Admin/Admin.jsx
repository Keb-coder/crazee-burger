import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Admin() {
	return <AdminStlyed>Admin</AdminStlyed>;
}

const AdminStlyed = styled.div`
    position: absolute;
    height:250px;
    bottom:0;
    left:0;
    right:0;
    background:${theme.colors.white};
    border: ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`;
