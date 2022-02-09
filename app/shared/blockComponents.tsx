import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import urlFor from '~/shared/util';
import { getImageDimensions } from '@sanity/asset-utils';

export const codeComponent = ({ value }: any) => (
	<div className="my-8">
		<SyntaxHighlighter
			language={value.language || 'text'}
			wrapLongLines
			style={nightOwl}
			className="rounded-lg text-sm"
		>
			{value.code}
		</SyntaxHighlighter>
	</div>
);

// Barebones lazy-loaded image component
export const ImageComponent = ({ value }: any) => {
	const { width, height } = getImageDimensions(value);
	return (
		<div className="text-center my-8">
			<img
				src={urlFor(value).width(800).fit('max').auto('format').url()}
				alt={value.alt || ' '}
				loading="lazy"
				style={{
					// Avoid jumping around with aspect-ratio CSS property
					aspectRatio: width / height,
				}}
			/>
			<p className="italic">{value.caption && value.caption}</p>
		</div>
	);
};
