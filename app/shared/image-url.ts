import imageUrlBuilder from '@sanity/image-url';
import { config } from '../lib/sanity/config';

const builder = imageUrlBuilder(config);

export default function imageUrlFor(source: any) {
	return builder.image(source);
}
