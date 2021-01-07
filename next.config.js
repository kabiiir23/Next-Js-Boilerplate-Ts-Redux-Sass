const withSvgr = require('next-plugin-svgr');

module.exports = withSvgr({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
