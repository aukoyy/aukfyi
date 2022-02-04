import { useLoaderData } from 'remix';
import { getClient } from '~/lib/sanity/getClient';
import BlogPost from '../../components/blog-post';
import Layout from '../../shared/layout';

export const loader = async ({ params }: any) => {
	const slug = params.slug;
	// console.log(slug);

	const post = await getClient().fetch(
		`[_type == "post" && slug.current == ${slug}]{ 
      _id, 
      title, 
      slug, 
      publishedAt, 
      mainImage,
    }`
	);

	// console.log(post[0]);
	// if (!post) throw new Error('Post not found');

	return { slug, post };
};

const BlogPostTemplate = () => {
	let { slug, post } = useLoaderData();

	return (
		<Layout>
			<h1 className="text-xl underline">Slug</h1>
			{slug}
			<h1 className="text-2xl underline mt-16">Post</h1>
			{post.title}
			{/* <BlogPost post={post} /> */}
		</Layout>
	);
};

export default BlogPostTemplate;
