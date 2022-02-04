import BlockContent from '@sanity/block-content-to-react';
import { config } from '../lib/sanity/config';

const PortableText = ({ blocks }: any) => (
	<BlockContent
		blocks={blocks}
		{...config}
		imageOptions={{ w: 320, h: 240, fit: 'max' }}
	/>
);

export default PortableText;
