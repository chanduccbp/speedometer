// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerating = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  onBraking = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="mh">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="head">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="butt1" onClick={this.onAccelerating} type="button">
            Accelerate
          </button>
          <button className="butt2" onClick={this.onBraking} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
