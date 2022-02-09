import { useEffect, useState } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import Tidbit from '~/components/tidbit';
import TidbitCategory from '~/components/tidbitCategory';
import { getClient } from '~/lib/sanity/getClient';
import Layout from '~/shared/layout';

const Tidbits = () => {
	let { tidbits, categories } = useLoaderData();

	const filteredCategories = () => {
		let cats: string[] = [];
		tidbits.forEach((tid: any) => cats.push(tid.category.title));
		return categories.filter((category: any) => cats.includes(category.title));
	};

	const [activeCategory, setActiveCategory] = useState<string>(
		filteredCategories()[0].title
	);

	return (
		<Layout>
			<div className="lg:flex gap-16">
				<div className="lg:w-1/2">
					<h1 className="text-4xl bold">Tidbits of knowledge</h1>
					<p className="semibold text-lg my-4">
						Things that I have learned along the way
					</p>
					<div className="flex flex-wrap items-stretch">
						{filteredCategories() &&
							filteredCategories().map((category: any) => (
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
				<div className="lg:w-1/2 mt-16 lg:mt-0">
					<dl>
						{tidbits &&
							tidbits
								.filter((tid: any) => tid.category.title === activeCategory)
								.map((tidbit: any) => {
									return (
										<Tidbit
											key={tidbit._id}
											title={tidbit.title}
											tidbit={tidbit.tidbit}
											sourceURL={tidbit.sourceURL}
										/>
									);
								})}
					</dl>
				</div>
			</div>
		</Layout>
	);
};

export default Tidbits;

export const loader: LoaderFunction = async () => {
	const tidbits = await getClient().fetch(
		`*[_type == "tidbit"]{ 
      _id, 
      title, 
      sourceURL,
      tidbit,
      category->{
        _id,
        title,
      }
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
