const withSvgr = require('next-plugin-svgr');
const path = require('path');

module.exports = withSvgr({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
