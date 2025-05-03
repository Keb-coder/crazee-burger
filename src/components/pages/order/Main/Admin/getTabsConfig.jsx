import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (currentTableSelected) => [
	{
		index: "add",
		label: "Ajouter un produit",
		Icon: <AiOutlinePlus />,
		className: currentTableSelected === "add" ? "is-active" : "",
	},
	{
		index: "edit",
		label: "Modifier un produit",
		Icon: <MdModeEditOutline />,
		className: currentTableSelected === "edit" ? "is-active" : "",
	},
];
