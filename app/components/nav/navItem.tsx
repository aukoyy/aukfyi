import { Link } from 'remix';

interface NavItemProps {
	text: string;
	url: string;
}

const NavItem = ({ text, url }: NavItemProps) => {
	return (
		<Link to={url} className="md:mt-0 mt-8 text-2xl text-gray-800">
			<li>{text}</li>
		</Link>
	);
};

export default NavItem;
