var React = require('react');
var Router = require('react-router');
var Routes = require('../components/Routes');

module.exports = function(url) {
  var html;
  Router.run(Routes, url,  function (Handler) {
    html =  React.renderToStaticMarkup(React.createElement(Handler, null));
  });
  return html;
};