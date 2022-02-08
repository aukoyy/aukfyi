import { useState } from 'react';
import { cn } from '~/shared/util';
import NavItem from './navItem';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { LoaderFunction, useLoaderData } from 'remix';

const Nav = () => {
	let { params, context, request } = useLoaderData();
	/* console.log(params);
	console.log(context);
	console.log(request); */
	const [showNav, setShowNav] = useState(false);
	function handleShowNav() {
		document.documentElement.scrollTop = 0;
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
				className="md:hidden fixed right-0 p-1 m-4"
			>
				{showNav ? (
					<XIcon className="h-16 w-16 text-gray-600" />
				) : (
					<MenuIcon className="h-16 w-16 text-gray-600" />
				)}
			</button>
			<nav
				className={cn(
					showNav ? 'flex justify-center h-screen' : 'hidden md:block',
					'mt-24 md:mt-0'
				)}
			>
				<ul className="flex flex-col md:flex-row md:justify-between md:mb-0 md:h-auto md:mt-16 md:space-x-16">
					<NavItem text="HOME" url="/" />
					<NavItem text="WRITINGS" url="/writings/" />
					<NavItem text="TIDBITS" url="/tidbits/" />
					{/* <NavItem text="CODE" url="/code/" /> */}
					{/* <NavItem text="PHOTOS" url="/photos/" /> */}
				</ul>
				{showNav}
			</nav>
		</header>
	);
};

export default Nav;

export const loader: LoaderFunction = async ({ params, context, request }) => {
	return { params, context, request };
};
