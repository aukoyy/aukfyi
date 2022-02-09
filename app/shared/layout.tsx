import Footer from '~/components/footer';
import Nav from '~/components/nav/nav';

interface LayoutProps {
	children: any;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen flex flex-col justify-between">
			<div className="flex justify-center">
				<div className="w-full max-w-screen-xl px-4">
					<Nav />
					<main className="mt-8">{children}</main>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Layout;
