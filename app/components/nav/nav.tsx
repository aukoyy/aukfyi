import React, { useState } from 'react';
import { cn } from '~/shared/util';
import NavItem from './navItem';
import { MenuIcon } from '@heroicons/react/solid';

const Nav = () => {
	const [showNav, setShowNav] = useState(false);
	function handleShowNav() {
		setShowNav(true);
	}
	function handleHideNav() {
		setShowNav(false);
	}
	return (
		<header className="flex justify-center md:justify-end">
			<button
				type="button"
				onClick={showNav ? handleHideNav : handleShowNav}
				className="md:hidden fixed right-0 p-1 m-4 bg-white"
			>
				<MenuIcon className="h-16 w-16 text-gray-600" />
			</button>

			<nav
				className={cn(
					showNav ? 'flex justify-center' : 'hidden md:block',
					'mt-24 md:mt-0'
				)}
			>
				<ul className="flex flex-col md:flex-row md:justify-between md:mb-0 md:h-auto h-screen md:mt-16 md:space-x-16">
					<NavItem text="HOME" url="/" />
					<NavItem text="BLOG" url="/blog/" />
					{/* <NavItem text="PROJECTS" url="/projects/" /> */}
					{/* <NavItem text="CHEET SHEET (today I learned)" url="/cheat-sheet/" /> */}
				</ul>
				{showNav}
			</nav>
		</header>
	);
};

export default Nav;
