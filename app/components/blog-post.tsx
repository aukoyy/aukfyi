import { differenceInDays, format, formatDistance } from 'date-fns';
import imageUrlFor from '../shared/image-url';
import { buildImageObj } from '../shared/util';
import PortableText from './portableText';

function BlogPost({ post }: any) {
	const { body, title, mainImage, publishedAt } = post;

	return (
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
						<PortableText blocks={body} />
					</div>
				)}
			</div>
		</article>
	);
}

export default BlogPost;
