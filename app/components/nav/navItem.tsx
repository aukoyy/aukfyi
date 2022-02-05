import React from 'react';
import { Link } from 'remix';

interface NavItemProps {
	text: string;
	url: string;
}

const NavItem = (props: NavItemProps) => {
	const { text: navItem, url } = props;
	return (
		<Link to={url} className="md:mt-0 mt-8 text-2xl text-gray-800">
			<li>{navItem}</li>
		</Link>
	);
};

export default NavItem;
