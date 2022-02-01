import Layout from '~/shared/layout';

const blog = () => {
	return (
		<Layout>
			<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
				<div className="mt-36">
					<h1 className="text-3xl">Blog</h1>

					<h2 className="text-2xl mt-36">Latest blog posts</h2>
				</div>
			</div>
		</Layout>
	);
};

export default blog;
