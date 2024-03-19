import React from "react";
import clsx from "clsx";
import { tabState } from "@/app/lib/definitions";

interface SubNavButtonProps {
	name: tabState,
	// eslint-disable-next-line no-unused-vars
	handleChange: (name: tabState) => void,
	currentTab: string,
}

const SubNavButton: React.FC<SubNavButtonProps> = ({ name, handleChange, currentTab }) => {

	return (
		<button className={
			clsx(
				"",
				{
					"bg-red-500": name !== currentTab,
					"bg-blue-500": name === currentTab
				}
			)
		}
			onClick={() => handleChange(name)}>
			{name}
		</button>
	)
}

export default SubNavButton;
