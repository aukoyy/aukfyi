import { format } from 'date-fns';

export function cn(...args: any[]) {
	return args.filter(Boolean).join(' ');
}

export function getBlogUrl(publishedAt: string, slug: string) {
	return `/blog/${slug}/`;
	// return `/blog/${format(new Date(publishedAt), 'yyyy-MM')}/${slug}/`;
}

export function buildImageObj(source = { asset: {} }) {
	const imageObj = {
		asset: { _ref: source.asset._ref || source.asset._id },
	};

	if (source.crop) imageObj.crop = source.crop;
	if (source.hotspot) imageObj.hotspot = source.hotspot;

	return imageObj;
}
