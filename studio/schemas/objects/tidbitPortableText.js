export default {
	name: 'tidbitPortableText',
	type: 'array',
	title: 'Excerpt',
	of: [
		{
			title: 'Block',
			type: 'block',
			styles: [{ title: 'Normal', value: 'normal' }],
			lists: [],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
				],
				annotations: [],
			},
		},
		{
			name: 'code',
			title: 'Code',
			type: 'code',
		},
		{
			type: 'image',
			options: { hotspot: true },
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
					options: {
						isHighlighted: true,
					},
				},
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
					description: 'Important for SEO and accessiblity.',
					validation: (Rule) =>
						Rule.error('You have to fill out the alternative text.').required(),
					options: {
						isHighlighted: true,
					},
				},
			],
		},
	],
};
