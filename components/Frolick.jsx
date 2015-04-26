var React = require('react');
var Carousel = require('./Carousel.jsx')

var Frolick = React.createClass({

  render() {
    let frolick = this.props.params.frolickId ? this.props.params.frolickId : '0'
    return (
      <div>
        {frolick} - id
        <div style={{ width: 320 }}>
          <Carousel>
            <img src="http://www.fillmurray.com/300/300" />
            <img src="http://www.fillmurray.com/300/299" />
            <img src="http://www.fillmurray.com/300/298" />
            <img src="http://www.fillmurray.com/300/301" />
            <img src="http://www.fillmurray.com/300/302" />
          </Carousel>
        </div>
      </div>
    )
  }

})

module.exports = Frolick;