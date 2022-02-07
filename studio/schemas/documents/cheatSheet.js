export default {
	name: 'cheatSheet',
	title: 'Cheat Sheet',
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
			name: 'learning',
			title: 'Learning',
			type: 'blockContent',
		},
	],
};
