import Layout from '~/shared/layout';

const Index = () => {
	return (
		<Layout>
			<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
				<div className="mt-36">
					<h1 className="text-3xl">Hi, I am Øyvind</h1>
					<p>I like creating things with web technologies</p>

					<h2 className="text-2xl mt-36">Latest blog posts</h2>
				</div>
			</div>
		</Layout>
	);
};

export default Index;
