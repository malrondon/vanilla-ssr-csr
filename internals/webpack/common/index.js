const path = require('path');
const babelRule = require('./babel-rule');

const { NODE_ENV } = process.env;
const ISDEV = NODE_ENV === 'development';

const commonConfig = target => {
  const devtool = ISDEV ? 'cheap-module-source-map' : 'source-map';
  const publicPath = '/';

  return {
    devtool,
    publicPath,
    mode: ISDEV ? 'development' : 'production',
    output: {
      path: path.resolve(__dirname, '../../../dist'),
      filename: `[name].min.js`,
      chunkFilename: `chunk.min.js`,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js'],
    },
    babelRule
  };
};

module.exports = commonConfig;
