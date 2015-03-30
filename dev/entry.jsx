var React = require('react');
var Router = require('react-router');
var Routes = require('../components/Routes');

Router.run(Routes, Router.HistoryLocation,  function (Handler, state) {
  var params = state.params;
  React.render(<Handler params={params}/>, document);
});