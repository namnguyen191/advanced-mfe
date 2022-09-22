import { merge } from 'webpack-merge';
import * as webpack from 'webpack';
import * as HTMLWebpackPlugin from 'html-webpack-plugin';
import commonConfig from './webpack.common';

// types for devServer
import 'webpack-dev-server';

let devConfig: webpack.Configuration = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ]
};

devConfig = merge(commonConfig, devConfig);

export default devConfig;
