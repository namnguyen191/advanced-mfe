import { merge } from 'webpack-merge';
import * as webpack from 'webpack';
import commonConfig from './webpack.common';
import * as packageJson from './package.json';

// types for devServer
import 'webpack-dev-server';

let prodConfig: webpack.Configuration = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'marketting',
      filename: 'remoteEntry.js',
      exposes: {
        './MarkettingApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
};

prodConfig = merge(commonConfig, prodConfig);

export default prodConfig;
