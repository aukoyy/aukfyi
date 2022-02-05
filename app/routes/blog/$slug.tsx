import { LoaderFunction, useLoaderData } from 'remix';
import { getClient } from '~/lib/sanity/getClient';
import BlogPost from '../../components/blog-post';
import Layout from '../../shared/layout';

export const loader: LoaderFunction = async ({ params }) => {
	// `*[_type == "post" && slug.current == ${params.slug}][0]{
	const posts = await getClient().fetch(
		`*[_type == "post"]{ 
      _id, 
      title, 
      slug,
      publishedAt, 
      mainImage,
      body,
    }`
	);

	const post = posts.filter((pos: any) => pos.slug.current === params.slug)[0];
	return { post };
};

const BlogPostTemplate = () => {
	let { post } = useLoaderData();
	console.log(post);

	return (
		<Layout>
			<h1 className="text-2xl underline mt-16">Post</h1>

			<BlogPost post={post} />
		</Layout>
	);
};

export default BlogPostTemplate;
