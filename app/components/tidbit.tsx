import { useState } from 'react';
import { ChevronDownIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import { PortableText } from '@portabletext/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { codeComponent } from '~/shared/blockComponents';

export interface Tidbit {
	title: string;
	tidbit: any;
	sourceURL?: string;
}

const Tidbit = ({ title, tidbit, sourceURL }: Tidbit) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<dt className={isOpen ? '' : 'border-b border-inactive border-teal-400'}>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="text-lg font-medium py-4 w-full flex justify-between items-center text-left focus:outline-none"
				>
					<span>{title}</span>
					<ChevronDownIcon
						className={`h-8 w-8 text-gray-600 transition-transform duration-200 ${
							isOpen ? 'transform rotate-180' : 'transform'
						}`}
					/>
				</button>
			</dt>
			<dd
				className={`text-grey-dark fade py-4 -mt-4 ${
					isOpen ? 'in border-b border-inactive border-teal-400 pl-4' : 'hidden'
				}`}
			>
				<PortableText
					value={tidbit}
					components={{
						types: { code: codeComponent },
					}}
				/>
				{sourceURL && (
					<a href={sourceURL} target="_blank">
						<span className="my-8 flex justify-center space-x-4 text-gray-700">
							<p className="italic text-xl">Source</p>
							<ExternalLinkIcon className="h-7 w-7 text-teal-700" />
						</span>
					</a>
				)}
			</dd>
		</>
	);
};

export default Tidbit;
