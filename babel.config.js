module.exports = {
  presets: ['next/babel'],
  overrides: [
    {
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
      plugins:
        process.env.NODE_ENV == 'production'
          ? ['transform-remove-console']
          : [],
    },
  ],
};
