var fs = require('fs');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


// create the index.html to be used by webpack
var page = require('./dev/bundlePage.js');
fs.writeFileSync('dev/index.html', page('/'));

var server = new WebpackDevServer(webpack(config[0]), {
  contentBase: './dev',
  publicPath: config[0].output.publicPath
});
// allow server to render any route
server.use('/', function(req, res) {
  res.send(page(req));
});
server.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});