import { LoaderFunction, useLoaderData } from 'remix';
import { getClient } from '~/lib/sanity/getClient';
import BlogPost from '../../components/blog-post';
import Layout from '../../shared/layout';

export const loader: LoaderFunction = async ({ params }) => {
	const post = await getClient().fetch(
		`*[_type == "post" && slug.current == ${params.slug}][0]{ 
      _id, 
      title, 
      publishedAt, 
      mainImage,
    }`
	);

	return { post };
};

const BlogPostTemplate = () => {
	let { post } = useLoaderData();
	console.log(post);

	return (
		<Layout>
			<h1 className="text-2xl underline mt-16">Post</h1>

			{/* <BlogPost post={post} /> */}
		</Layout>
	);
};

export default BlogPostTemplate;
