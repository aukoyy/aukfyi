import imageUrlBuilder from '@sanity/image-url';
import { config } from '../lib/sanity/config';

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

const builder = imageUrlBuilder(config);

export default function imageUrlFor(source: any) {
	return builder.image(source);
}
