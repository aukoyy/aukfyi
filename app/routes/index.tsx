import { json, useLoaderData } from 'remix';

import Layout from '~/shared/layout';
import { getClient } from '~/lib/sanity/getClient';
import BlogPostPreview from '~/components/blog-post-preview';

const auk = require('../assets/auk.jpg');

const Index = () => {
	let { posts } = useLoaderData();

	return (
		<Layout>
			<div>
				<div className="mt-36">
					<h1 className="text-3xl">Hi, I am Øyvind</h1>
					{/* <div className="flex items-center space-x-6">
						<div className="rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 shadow-lg  p-1 ">
							<div className="rounded-full bg-black/60 p-[2px] h-[66px] w-[66px]">
								<span className="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"></span>
								<img
									src={auk}
									alt="Picture of me"
									className="rounded-full position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
								/>
							</div>
						</div>
					</div> */}
					<p>
						Welcome to my digital garden where I share what I'm learning about
						shipping great products, becoming a better developer and growing a
						career in tech.
					</p>

					<h2 className="text-2xl mt-36">Latest blog posts</h2>
					<div className="mt-8 flex flex-wrap justify-center lg:justify-between gap-8">
						{posts?.length > 1
							? posts.map((post: any) => (
									<div key={post._id}>
										<BlogPostPreview
											title={post.title}
											slug={post.slug.current}
											publishedAt={post.publishedAt}
											mainImage={post.mainImage}
										/>
									</div>
							  ))
							: null}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Index;

export async function loader() {
	const posts = await getClient().fetch(
		`*[_type == "post"]{ 
      _id, 
      title, 
      slug, 
      publishedAt, 
      mainImage
    }`
	);

	return json(
		{ posts },
		{
			headers: {
				'Cache-control': 'max-age=86400',
			},
		}
	);
}
