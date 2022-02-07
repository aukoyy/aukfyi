import { format } from 'date-fns';
import { Link } from 'remix';
import urlFor from '../shared/util';
import { getBlogUrl } from '../shared/util';

interface BlogPostPreviewProps {
	title: string;
	publishedAt: any;
	slug: string;
	mainImage?: any;
	categories?: any;
	excerpt?: any;
}

const BlogPostPreview = (props: BlogPostPreviewProps) => {
	const { publishedAt, slug, mainImage, title, categories, excerpt } = props;

	return (
		<Link to={getBlogUrl(publishedAt, slug)}>
			<div className="shadow rounded-xl sm:w-96">
				<div className="absolute p-2 flex flex-wrap gap-1">
					{categories &&
						categories.length > 0 &&
						categories.map((category: any) => (
							<span
								key={category._id}
								className="bg-white opacity-80 text-sm px-1.5 mx-1 rounded"
							>
								{category.title}
							</span>
						))}
				</div>

				{mainImage && mainImage.asset && (
					<img
						src={urlFor(mainImage).width(600).height(300).url()!}
						alt={mainImage.alt}
						className="rounded-t-xl"
					/>
				)}
				<div className="p-4 mt-2">
					<h3 className="font-bold">{title}</h3>
					<p className="text-gray-500">
						{excerpt && excerpt[0].children[0].text}
					</p>
					<p className="mt-2">{format(new Date(publishedAt), 'PPP')}</p>
				</div>
			</div>
		</Link>
	);
};

export default BlogPostPreview;
