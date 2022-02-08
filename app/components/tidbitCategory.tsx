import urlFor from '~/shared/util';

const image = require('../assets/auk.jpg');

export interface TidbitCategory {
	title: string;
	image?: any;
	isActive: boolean;
	setActive: (newActive: string) => void;
}

const TidbitCategory = ({
	title,
	isActive,
	setActive,
	image,
}: TidbitCategory) => {
	return (
		<div className="sm:block p-2 sm:w-1/2">
			<div
				className={`cursor-pointer rounded-lg shadow-lg transition-all duration-150 
      hover:border-blue hover:shadow-md hover:border-teal-900 border 
       ${isActive ? 'bg-teal-500 text-white' : 'bg-white'}
      grid grid-cols-3`}
				onClick={() => setActive(title)}
			>
				{image && image.asset && (
					<img
						src={urlFor(image).width(300).height(300).url()!}
						alt={image.alt}
						className="rounded-l-lg"
					/>
				)}

				<h2 className="col-span-2 flex items-center pl-8 semibold text-2xl">
					{title}
				</h2>
			</div>
		</div>
	);
};

export default TidbitCategory;
