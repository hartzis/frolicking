var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Layout = React.createClass({

  getDefaultProps: function() {

  },

  render: function() {

    return (
      <div>
        <ul>
          <li><Link to="frolick" params={{frolickId: "123"}}>a123</Link></li>
          <li><Link to="frolick" params={{frolickId: "1234"}}>b1234</Link></li>
          <li><Link to="frolick" params={{frolickId: "12345"}}>12345</Link></li>
        </ul>
        <main role="main">
          <RouteHandler {...this.props}/>
        </main>
      </div>
    );
  }
});

module.exports = Layout;