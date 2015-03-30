var React = require('react');

var Frolick = React.createClass({

  render() {
    let frolick = this.props.params.frolickId ? this.props.params.frolickId : '0'
    return (<div>{frolick}</div>)
  }

})

module.exports = Frolick;