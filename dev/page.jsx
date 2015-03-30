var React = require('react');
var Router = require('react-router');
var Routes = require('../components/Routes');

module.exports = function(req) {
  var html;
  Router.run(Routes, req.url,  function (Handler, state) {
    var params = state.params;
    html =  React.renderToString(<Handler params={params}/>);
  });
  return html;
};