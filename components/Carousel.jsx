var React = require('react')

var Swipeable = require('./Swipeable.jsx')

var Carousel = React.createClass({
  getInitialState: function () {
    return {
      prevIndex: 0,
      currentIndex: 0,
      itemWidths: Array(this.props.children.length),
      itemStart: Array(this.props.children.length),
      containerWidth: 0,
      delta: 0
    }
  },

  componentDidMount: function () {
    this.setWidths();
    setInterval(function () {
      this.setWidths()
    }.bind(this), 2000)
  },

  setWidths: function () {
    var widths = Array.prototype.map.call(
      React.findDOMNode(this.refs.carouselContainer).children,
        function (node) {
          return node.offsetWidth
        }
    )

    var totalWidth = widths.reduce(function (a, b) { return a + b }, 0)
    var startPos = widths.reduce(function (total, width) {
      total.push(total[total.length - 1] + width)
      return total
    }, [0])
    if (totalWidth !== this.state.containerWidth) {
      this.setState({
        itemWidths: widths,
        itemStart: startPos,
        containerWidth: totalWidth
      })
    }    
  },

  addResistance: function (delta) {
    return delta * (1 - parseInt(Math.sqrt(Math.pow(delta, 2)), 10) / 1000)
  },

  doMoveImage: function (_, x) {
    var index = this.state.currentIndex
    var imageMoveIndex = this.state.currentIndex
    if (x < 0) {
      if (index > 0) {
        index = index - 1
        imageMoveIndex = index
      }
    } else if (x > 0) {
      if (index < this.props.children.length - 1) {
        index = index + 1
        imageMoveIndex = imageMoveIndex
      }
    }

    this.setState({
      prevIndex: imageMoveIndex,
      currentIndex: index,
      delta: 0
    })
  },

  prevImageScroll: function (e, delta) {
    this.setState({
      delta: this.addResistance(delta)
    })
  },

  nextImageScroll: function (e, delta) {
    this.setState({
      delta: 0 - this.addResistance(delta)
    })
  },

  render: function () {
    var delta = this.state.delta +
      (0 - this.state.itemStart[this.state.currentIndex])

    var transition = 'all 250ms ease-out'

    var clear = (<div style={{height: 0, visibility: 'hidden', clear: 'left'}}></div>)

    var swipeContainerChildren = this.props.children.map(function (item, i) {
      return (
        <div key={i} style={{float: 'left'}}>
          {item}
        </div>
      )
    })

    var swipeContainer = (
      <Swipeable onSwipingRight={this.prevImageScroll}
        onSwipingLeft={this.nextImageScroll}
        onSwiped={this.doMoveImage}
        ref="carouselContainer"
        style={{
          WebkitTransform: 'translate3d(' + delta + 'px, 0, 0)',
          transition: this.state.delta === 0 ? transition : 'none',
          width: this.state.containerWidth
        }} >
          {swipeContainerChildren}
          {clear}
      </Swipeable>
    )

    return (
      <div {...this.props} style={{overflow: 'hidden', width: '100%'}}>
        {swipeContainer}
      </div>
    )

  }
})

module.exports = Carousel
