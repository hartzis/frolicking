var React = require('react');
var Router = require('react-router');
var Routes = require('../components/Routes');

module.exports = function(url) {
  var html;
  Router.run(Routes, url,  function (Handler, state) {
    var params = state.params;
    html =  React.renderToStaticMarkup(<Handler params={params}/>);
  });
  return html;
};