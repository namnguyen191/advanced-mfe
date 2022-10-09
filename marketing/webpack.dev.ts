import { merge } from 'webpack-merge';
import * as webpack from 'webpack';
import commonConfig from './webpack.common';
import * as packageJson from './package.json';

// types for devServer
import 'webpack-dev-server';

let devConfig: webpack.Configuration = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/'
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: '/index.html'
    }
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

devConfig = merge(commonConfig, devConfig);

export default devConfig;
