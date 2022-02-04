import { format } from 'date-fns';
import { Link } from 'remix';
import imageUrlFor from '../shared/image-url';
import { buildImageObj, getBlogUrl } from '../shared/util';

interface BlogPostPreviewProps {
	title: string;
	publishedAt: any;
	slug: string;
	mainImage?: any;
	categories?: any;
	// _rawExcerpt?: any;
}

const BlogPostPreview = (props: BlogPostPreviewProps) => {
	const { publishedAt, slug, mainImage, title, categories } = props;

	return (
		<Link to={getBlogUrl(publishedAt, slug)}>
			<div className="shadow rounded-xl mt-4 md:w-96">
				<div className="absolute p-2 flex flex-wrap gap-1">
					{categories &&
						categories.length > 0 &&
						categories.map((category: any) => (
							<span
								key={category._ref}
								className="bg-white opacity-80 text-sm px-1.5 mx-1 rounded"
							>
								{category.title} hey
							</span>
						))}
				</div>

				{mainImage && mainImage.asset && (
					<img
						src={
							imageUrlFor(buildImageObj(mainImage))
								.width(600)
								.height(300)
								.url()!
						}
						alt={mainImage.alt}
						className="rounded-t-xl"
					/>
				)}
				<div className="p-4 mt-2">
					<h3 className="font-bold">{title}</h3>
					{/* <p className="text-gray-500">{_rawExcerpt && _rawExcerpt[0].children[0].text}</p> */}
					<p className="mt-2">{format(new Date(publishedAt), 'PPP')}</p>
				</div>
			</div>
		</Link>
	);
};

export default BlogPostPreview;
