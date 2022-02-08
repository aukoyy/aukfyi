import { differenceInDays, format, formatDistance } from 'date-fns';
import { LoaderFunction, useLoaderData } from 'remix';
import { getClient } from '~/lib/sanity/getClient';
import urlFor from '~/shared/util';
import { getImageDimensions } from '@sanity/asset-utils';
import Layout from '../../shared/layout';
import { PortableText } from '@portabletext/react';
import { codeComponent, ImageComponent } from '~/shared/blockComponents';

const BlogPostTemplate = () => {
	let { post } = useLoaderData();
	const { body, title, mainImage, publishedAt } = post;

	return (
		<Layout>
			<article className="md:mt-8">
				<h1 className="text-4xl mt-12 border-b-4 border-blue-500">{title}</h1>

				{publishedAt && (
					<div className="mt-2 text-gray-300">
						{differenceInDays(new Date(publishedAt), new Date()) > 3
							? formatDistance(new Date(publishedAt), new Date())
							: format(new Date(publishedAt), 'MMMM do, yyyy')}
					</div>
				)}

				<div className="mt-16 flex justify-center">
					{mainImage && mainImage.asset && (
						<img
							className="rounded-xl shadow"
							src={urlFor(mainImage).url()!}
							alt={mainImage.alt}
						/>
					)}
				</div>

				<div className="mt-16 text-gray-700 flex justify-center">
					{body && (
						<div className="prose text-xl">
							<PortableText
								value={body}
								components={{
									types: { image: ImageComponent, code: codeComponent },
								}}
							/>
						</div>
					)}
				</div>
			</article>
		</Layout>
	);
};

export default BlogPostTemplate;

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
