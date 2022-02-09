export default {
	name: 'tidbitPortableText',
	type: 'array',
	title: 'Excerpt',
	of: [
		{
			title: 'Block',
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'H1', value: 'h1' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
				{ title: 'Quote', value: 'blockquote' },
			],
			lists: [{ title: 'Bullet', value: 'bullet' }],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
					{ title: 'Code', value: 'code' },
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
