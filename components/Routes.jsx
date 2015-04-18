var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Layout = require('./Layout');
var Frolick = require('./Frolick')

// initialize touch events?
// React.initializeTouchEvents(true)

var Routes = (
  <Route name="app" path="/" handler={Layout}>
    <Route name="frolick" path=":frolickId" handler={Frolick}/>
    <DefaultRoute handler={Frolick}/>
  </Route>
);

module.exports = Routes;