import React from 'react';
import NavButton from "./NavButton";

const NavBar: React.FC = () => {

	return (
		<nav className="flex h-8 mt-2 mx-2">
			<NavButton text='About' link="/about"/>
			<NavButton text='Portfolio' link="/portfolio"/>
			<NavButton text='Blog' link="/blog"/>
			{ process.env.NODE_ENV === "development"
				? <NavButton text='COMPONENT TESTING' link="/componentTesting" />
				: null }
		</nav>
	)
}

export default NavBar;
