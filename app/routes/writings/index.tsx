import { useEffect, useState } from 'react';
import { json, LoaderFunction, useLoaderData } from 'remix';
import BlogPostPreview from '~/components/blog-post-preview';
import { getClient } from '~/lib/sanity/getClient';
import Layout from '~/shared/layout';

const Blog = () => {
	let { posts, categories } = useLoaderData();
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	const isPostInSelectedCategories = (post: any) => {
		let shouldRender = false;
		post.categories &&
			post.categories.forEach((category: any) => {
				if (selectedCategories.includes(category.title)) {
					shouldRender = true;
				}
			});
		return shouldRender;
	};

	const shouldPostRender = (post: any): boolean => {
		if (selectedCategories.length === 0) return true;
		return isPostInSelectedCategories(post);
	};

	const toggleCategory = (categoryTitle: string) => {
		if (selectedCategories.includes(categoryTitle)) {
			setSelectedCategories(
				selectedCategories.filter((cat: string) => cat !== categoryTitle)
			);
		} else {
			setSelectedCategories([categoryTitle, ...selectedCategories]);
		}
	};

	const filteredCategories = () => {
		let cats: string[] = [];
		posts.forEach((pos: any) =>
			pos.categories.forEach((po: any) => cats.push(po.title))
		);
		return categories.filter((category: any) => cats.includes(category.title));
	};

	return (
		<Layout>
			<div className="mt-8 text-gray-500">
				<h2>FILTER BY CATEGORY</h2>
				<nav className="mt-2">
					<ul className="flex flex-wrap gap-4 sm:gap-12">
						<li
							onClick={() => setSelectedCategories([])}
							className={`cursor-pointer ${
								selectedCategories.length === 0 ? 'text-gray-800' : ''
							}`}
						>
							All
						</li>
						{filteredCategories() &&
							filteredCategories().map((category: any) => (
								<li
									onClick={() => toggleCategory(category.title)}
									key={category._id}
									className={`cursor-pointer ${
										selectedCategories.includes(category.title)
											? 'text-gray-800 border-blue-600 border-b-2'
											: ''
									}`}
								>
									{category.title}
								</li>
							))}
					</ul>
				</nav>
				<hr className="mt-2" />

				<div className="mt-16 flex flex-wrap justify-center md:justify-between gap-8">
					{posts &&
						posts
							.filter((post: any) => shouldPostRender(post))
							.map((post: any) => (
								<div key={post._id}>
									<BlogPostPreview
										title={post.title}
										publishedAt={post.publishedAt}
										slug={post.slug.current}
										mainImage={post.mainImage}
										categories={post.categories}
										excerpt={post.excerpt}
									/>
								</div>
							))}
				</div>
			</div>
		</Layout>
	);
};

export default Blog;

export const loader: LoaderFunction = async () => {
	const posts = getClient().fetch(
		`*[_type == "post"]{ 
      _id, 
      title, 
      excerpt,
      slug, 
      publishedAt, 
      mainImage,
      categories[]->{
        _id,
        title
      },
    }`
	);
	const categories = getClient().fetch(
		`*[_type == "category"]{ 
      _id, 
      title,
    }`
	);

	return json(
		{ posts: await posts, categories: await categories },
		{
			headers: {
				'Cache-control': 'max-age=86400',
			},
		}
	);
};
