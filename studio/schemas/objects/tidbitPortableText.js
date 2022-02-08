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
	],
};
