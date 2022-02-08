export default {
	name: 'tidbit',
	title: 'Tidbit',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'category',
			title: 'Category',
			type: 'reference',
			to: { type: 'category' },
		},
		{
			name: 'tidbit',
			title: 'Tidbit',
			type: 'blockContent',
		},
	],
};
