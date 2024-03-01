"use client"

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
	  
			<div className={clsx(
				"flex bg-blue-500 hover:bg-blue-300 w-full items-center justify-center",
				{"bg-blue-400": pathname === `/${text.toLowerCase()}`}
			)}><Link href={link} className="flex justify-center items-center w-full h-full">
				{text}
			</Link></div>
		
	)
}

export default NavButton;
