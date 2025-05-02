import { createContext } from "react";

export default createContext({
	isModeAdmin: false,
	setIsModeAdmin: () => {},

	isCollapsed: false,
	setIsCollapsed: () => {},

	isEditTabSelected: false,
	setIsEditTabSelected: () => {},

	isAddTabSelected: false,
	setisAddTabSelected: () => {},
});
