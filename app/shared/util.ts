import imageUrlBuilder from '@sanity/image-url';
import { config } from '../lib/sanity/config';

export function cn(...args: any[]) {
	return args.filter(Boolean).join(' ');
}

export function getBlogUrl(publishedAt: string, slug: string) {
	return `/writings/${slug}/`;
	// return `/blog/${format(new Date(publishedAt), 'yyyy-MM')}/${slug}/`;
}

const builder = imageUrlBuilder(config);

export default function urlFor(source: any) {
	return builder.image(source);
}
