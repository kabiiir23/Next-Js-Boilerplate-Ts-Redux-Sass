const withSvgr = require('next-plugin-svgr');
const path = require('path');
const withTM = require('next-transpile-modules')([]);

module.exports = withSvgr({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    cognito_REGION: '',
    cognito_USER_POOL_ID: '',
    cognito_APP_CLIENT_ID: '',
    aws_ACCESS_KEY_ID: '',
    aws_SECRET_KEY: '',
    cognito_IDENTITY_POOL_ID: '',
    redux_SECRET: '',
    s3_REGION: '',
    s3_BUCKET: '',
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
});
