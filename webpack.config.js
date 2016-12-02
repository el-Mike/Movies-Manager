module.exports = {
	context: __dirname,
	entry: './src/app',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
