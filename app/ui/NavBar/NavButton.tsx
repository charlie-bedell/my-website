"use client"
import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavButtonProps {
	text: string,
	link: string
}

const NavButton: React.FC<NavButtonProps> = ({text, link}) => {

	const pathname = usePathname();
	return (

		<div className={
			clsx(
				"flex hover:bg-blue-300 w-full items-center justify-center",
				{
					"bg-blue-500": pathname !== `/${text.toLowerCase()}`,
					"bg-blue-400": pathname === `/${text.toLowerCase()}`
				}
			)
		}>
			<Link href={link} className="flex justify-center items-center w-full h-full">
				{text}
			</Link></div>

	)
}

export default NavButton;
