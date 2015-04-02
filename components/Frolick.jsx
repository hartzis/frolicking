var React = require('react');
var Carousel = require('./Carousel')

var Frolick = React.createClass({

  render() {
    let frolick = this.props.params.frolickId ? this.props.params.frolickId : '0'
    return (
      <div>
        {frolick}
        <div style={{ width: 320 }}>
          <Carousel>
            <div>
              <img src="http://www.fillmurray.com/300/300" />
            </div>
            <div>
              <img src="http://www.fillmurray.com/300/299" />
            </div>
            <div>
              <img src="http://www.fillmurray.com/300/298" />
            </div>
            <div>
              <img src="http://www.fillmurray.com/300/301" />
            </div>
            <div>
              <img src="http://www.fillmurray.com/300/302" />
            </div>
          </Carousel>
        </div>
      </div>
    )
  }

})

module.exports = Frolick;