module.exports = {
	presets: ['next/babel'],
	overrides: [
		{
			/** NextJS does not support css imports within modules. This plugin removes the css imports within node_modules. Afterwards you need to import the css file in `_app.tsx` file */
			include: ['./node_modules'],
			plugins: [
				[
					'@iwatakeshi/babel-plugin-remove-import-styles',
					{
						extensions: ['.css'],
					},
				],
			],
		},
		{
			/** This plugin removes all the console.log from production build */
			plugins:
				process.env.NODE_ENV == 'production'
					? ['transform-remove-console']
					: [],
		},
	],
};
