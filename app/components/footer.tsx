const Footer = () => (
	<footer className="bg-gray-700 h-48 flex justify-center items-center mt-8">
		<FooterIcon url="https://www.instagram.com/aukoyy/" />
		<FooterIcon url="https://github.com/aukoyy" />
		<FooterIcon url="https://twitter.com/aukoyy" />
		<FooterIcon url="https://www.linkedin.com/in/%C3%B8yvind-aukner-a51659183/" />
		<FooterIcon url="" />
	</footer>
);

export default Footer;

interface FooterIconProps {
	// icon: any;
	url: string;
}

const FooterIcon = (props: FooterIconProps) => {
	const { url } = props;
	return (
		<div className="text-blue-500 m-4">
			<a href={url} target="_blank">
				icon
			</a>
		</div>
	);
};
