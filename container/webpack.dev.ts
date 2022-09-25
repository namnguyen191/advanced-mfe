import { merge } from 'webpack-merge';
import * as webpack from 'webpack';
import commonConfig from './webpack.common';
import * as packageJson from './package.json';

// types for devServer
import 'webpack-dev-server';

let devConfig: webpack.Configuration = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketting: 'marketting@http://localhost:8081/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ]
};

devConfig = merge(commonConfig, devConfig);

export default devConfig;
