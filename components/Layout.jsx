var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Layout = React.createClass({

  getDefaultProps: function() {
    return {title: 'React Static Site'};
  },

  render: function() {
    var script = (process.env.NODE_ENV!=='production') ? <script src="http://localhost:3000/scripts/bundle.js"></script> : '';
    // var style = (process.env.NODE_ENV==='production') ? <link rel="stylesheet" href="/assets/pure.css" /> : '';
    // var style2 = (process.env.NODE_ENV==='production') ? <link rel="stylesheet" href="/assets/style.css" /> : '';

    var title = 'Test - React Static Site';
    return (
      <html>
        <head>
          <title>{title}</title>
        </head>
        <body>
          <div id="layout">
            <Link to="frolick" params={{frolickId: "123"}}/>
            <Link to="frolick" params={{frolickId: "1234"}}/>
            <Link to="frolick" params={{frolickId: "12345"}}/>
            <main role="main">
              <RouteHandler {...this.props}/>
            </main>
          </div>
          {script}
        </body>
      </html>
    );
  }
});

module.exports = Layout;