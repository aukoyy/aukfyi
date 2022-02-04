import React from 'react';
import Footer from '~/components/footer';
import Nav from '~/components/nav/nav';
// import { useStaticQuery, graphql } from 'gatsby';
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

interface LayoutProps {
	children: any;
}

const Layout = (props: LayoutProps) => {
	const { children } = props;
	/* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `); */

	return (
		<div className="min-h-screen flex flex-col justify-between">
			<div className="flex justify-center">
				<div className="w-5/6 md:w-4/6">
					<Nav />
					<main>{children}</main>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Layout;
