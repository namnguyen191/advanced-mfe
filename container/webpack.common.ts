import * as webpack from 'webpack';
import * as HTMLWebpackPlugin from 'html-webpack-plugin';

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
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ]
};

export default commonConfig;
