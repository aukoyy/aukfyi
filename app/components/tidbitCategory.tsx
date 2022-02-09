import urlFor from '~/shared/util';

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
		<div className="sm:block p-2 w-1/2">
			<div
				className={`cursor-pointer rounded-lg shadow-lg transition-all duration-150 
        ${isActive ? 'bg-teal-500 text-white' : 'bg-white'}
        p-2 sm:p-0 sm:grid grid-cols-3 hover:bg-teal-400
      `}
				onClick={() => setActive(title)}
			>
				{image && image.asset && (
					<img
						src={urlFor(image).width(300).height(300).url()!}
						alt={image.alt}
						className="rounded-lg sm:rounded-r-none"
					/>
				)}

				<h2 className="col-span-2 hidden sm:flex items-center pl-8 semibold text-2xl  ">
					{title}
				</h2>
			</div>
		</div>
	);
};

export default TidbitCategory;
