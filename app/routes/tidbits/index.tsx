import { useEffect, useState } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import Tidbit from '~/components/tidbit';
import TidbitCategory from '~/components/tidbitCategory';
import { getClient } from '~/lib/sanity/getClient';
import Layout from '~/shared/layout';

const Tidbits = () => {
	let { tidbits, categories } = useLoaderData();
	const [activeCategory, setActiveCategory] = useState<string>(
		categories[0].title
	);

	useEffect(() => {
		console.log(activeCategory);
	}, [activeCategory]);

	return (
		<Layout>
			<div className="md:flex gap-16">
				<div className="md:w-1/2">
					<h1 className="text-4xl bold">Tidbits of knowledge</h1>
					<p className="semibold text-lg my-4">
						Things that I have learned along the way
					</p>
					<div className="flex flex-wrap items-stretch">
						{categories &&
							categories.map((category: any) => (
								<TidbitCategory
									key={category._id}
									title={category.title}
									isActive={category.title === activeCategory}
									setActive={setActiveCategory}
									image={category.mainImage}
								/>
							))}
					</div>
				</div>
				<div className="md:w-1/2">
					<dl>
						<Tidbit title="Test" tidbit="test tidbit" />
						<Tidbit title="Test" tidbit="test tidbit" />
						<Tidbit title="Test" tidbit="test tidbit" />
						<Tidbit title="Test" tidbit="test tidbit" />
					</dl>
				</div>
			</div>

			{tidbits &&
				tidbits.map((tidbit: any) => {
					return <div key={tidbit._id}>{tidbit.title}</div>;
				})}
		</Layout>
	);
};

export default Tidbits;

export const loader: LoaderFunction = async () => {
	const tidbits = await getClient().fetch(
		`*[_type == "tidbit"]{ 
      _id, 
      title, 
      tidbit,
    }`
	);
	const categories = await getClient().fetch(
		`*[_type == "category"]{ 
      _id, 
      title,
      mainImage,
    }`
	);

	return { tidbits, categories };
};
