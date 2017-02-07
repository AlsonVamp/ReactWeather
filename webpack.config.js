var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
new webpack.ProvidePlugin({
  '$':'jquery',
  'jQuery':'jquery'
})
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main$: path.join(__dirname, 'app/components/Main.jsx'),
      Nav$: path.join(__dirname, 'app/components/Nav.jsx'),
      Weather$: path.join(__dirname, 'app/components/Weather.jsx'),
      About$: path.join(__dirname, 'app/components/About.jsx'),
      Examples$: path.join(__dirname, 'app/components/Examples.jsx'),
      WeatherForm$: path.join(__dirname, 'app/components/WeatherForm.jsx'),
      WeatherMessage$: path.join(__dirname, 'app/components/WeatherMessage.jsx'),
      openWeatherMap$: path.join(__dirname, 'app/api/openWeatherMap.jsx'),
      apiKey$: path.join(__dirname, 'app/api/apiKey.js'),
      ErrorModal$:path.join(__dirname,'app/components/ErrorModal.jsx')

    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
