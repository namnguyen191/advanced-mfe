import { merge } from 'webpack-merge';
import * as webpack from 'webpack';
import commonConfig from './webpack.common';
import * as packageJson from './package.json';

// types for devServer
import 'webpack-dev-server';

const domain = process.env.PRODUCTION_DOMAIN;

let prodConfig: webpack.Configuration = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/'
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketting: `marketting@${domain}/marketting/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
};

prodConfig = merge(commonConfig, prodConfig);

export default prodConfig;
