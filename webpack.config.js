var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:7007/',
    'webpack/hot/only-dev-server',
    './src/app/Application/index.jsx',
    './src/app/index.jsx'
  ],
  output: {
    path: __dirname + '/build/',
    filename: '[name].js',
    contentBase: 'http://localhost:7001',
    publicPath: 'http://localhost:7007/assets/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,  loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
      { test: /\.less$/,  loader: 'style!css!less' },
      { test: /\.jpe?g$/, loader: 'url?limit=10000&name=[name].[sha512:hash:base64:7].[ext]' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: '#inline-source-map'
};