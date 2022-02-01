import React, { useState } from 'react';
import { cn } from '~/shared/util';
import NavItem from './navItem';

interface NavProps {
	// showNav?: boolean
}

const Nav = (props: NavProps) => {
	// const { showNav } = props;
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
				hamburger
			</button>

			{/* // cn(showNav ? 'flex justify-center text-center' : 'hidden md:flex') */}
			<nav
				className={cn(
					showNav ? 'flex justify-center' : 'hidden md:block',
					'mt-24 md:mt-0'
				)}
			>
				<ul className="flex flex-col md:flex-row md:justify-between mb-96 md:m-4 md:w-36">
					<NavItem text="HOME" url="/" />
					<NavItem text="BLOG" url="/blog/" />
					{/* <NavItem
            text="PROJECTS"
            url="/projects/"
          /> */}
				</ul>
				{showNav}
			</nav>
		</header>
	);
};

export default Nav;
