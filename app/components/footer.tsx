import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faGithub,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
	<footer className="bg-gray-700 h-48 flex justify-center items-center mt-8">
		<FooterIcon icon={faInstagram} url="https://www.instagram.com/aukoyy/" />
		<FooterIcon icon={faGithub} url="https://github.com/aukoyy" />
		<FooterIcon icon={faTwitter} url="https://twitter.com/aukoyy" />
		<FooterIcon
			icon={faLinkedin}
			url="https://www.linkedin.com/in/%C3%B8yvind-aukner-a51659183/"
		/>
		{/* <FooterIcon icon={faGraduationCap} url="" /> */}
	</footer>
);

export default Footer;

interface FooterIconProps {
	icon: any;
	url: string;
}

const FooterIcon = (props: FooterIconProps) => {
	const { url, icon } = props;
	return (
		<div className="text-blue-500 m-4">
			<a href={url} target="_blank">
				<FontAwesomeIcon icon={icon} size="2x" />
			</a>
		</div>
	);
};
