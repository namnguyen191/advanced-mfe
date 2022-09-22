import * as webpack from 'webpack';

// types for devServer
import 'webpack-dev-server';

const commonConfig: webpack.Configuration = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};

export default commonConfig;
