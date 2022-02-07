import { differenceInDays, format, formatDistance } from 'date-fns';
import { LoaderFunction, useLoaderData } from 'remix';
import { getClient } from '~/lib/sanity/getClient';
import imageUrlFor from '~/shared/util';
import { buildImageObj } from '~/shared/util';
import Layout from '../../shared/layout';
import { PortableText } from '@portabletext/react';

import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }: any) => {
	const { width, height } = getImageDimensions(value);
	return (
		<img
			src={urlBuilder()
				.image(value)
				.width(isInline ? 100 : 800)
				.fit('max')
				.auto('format')
				.url()}
			alt={value.alt || ' '}
			loading="lazy"
			style={{
				// Display alongside text if image appears inside a block text span
				display: isInline ? 'inline-block' : 'block',

				// Avoid jumping around with aspect-ratio CSS property
				// aspectRatio: width / height,
			}}
		/>
	);
};

const components = {
	types: {
		image: SampleImageComponent,
		/* image: ({ value }: any) => <img src={value.imageUrl} />, */
		// Any other custom types you have in your content
		// Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
	},
};

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
							src={imageUrlFor(buildImageObj(mainImage)).url()!}
							alt={mainImage.alt}
						/>
					)}
				</div>

				<div className="mt-16 text-gray-700 flex justify-center">
					{body && (
						<div className="prose text-xl">
							<PortableText value={body} components={components} />
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
