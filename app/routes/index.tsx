import Layout from '~/shared/layout';

import { getClient } from '~/lib/sanity/getClient';
import { useLoaderData } from 'remix';
import BlogPostPreview from '~/components/blog-post-preview';

// loader() must be async!
export async function loader() {
	const posts = await getClient().fetch(
		`*[_type == "post"]{ 
      _id, 
      title, 
      slug, 
      publishedAt, 
      mainImage
    }`
	);

	return { posts };
}

const Index = () => {
	let { posts } = useLoaderData();

	return (
		<Layout>
			<div>
				<div className="mt-36">
					<h1 className="text-3xl">Hi, I am Øyvind</h1>
					<p>I like creating things with web technologies</p>

					<h2 className="text-2xl mt-36">Latest blog posts</h2>
					<div className="mt-8 flex flex-wrap justify-center lg:justify-between">
						{posts?.length > 1
							? posts.map((post: any) => (
									<div key={post._id}>
										<BlogPostPreview
											title={post.title}
											slug={post.slug.current}
											publishedAt={post.publishedAt}
											mainImage={post.mainImage}
										/>
									</div>
							  ))
							: null}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Index;
