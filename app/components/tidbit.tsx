import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { PortableText } from '@portabletext/react';

export interface Tidbit {
	title: string;
	tidbit: any;
}

const Tidbit = ({ title, tidbit }: Tidbit) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<dt className={isOpen ? '' : 'border-b border-inactive'}>
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
				className={`text-grey-dark fade pb-4 -mt-4 ${
					isOpen ? 'in border-b border-inactive' : 'hidden'
				}`}
			>
				<PortableText value={tidbit} />
			</dd>
		</>
	);
};

export default Tidbit;
