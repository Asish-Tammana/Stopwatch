import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 0,
      seconds: 0,
    }
  }

  startCount = () => {
    this.stopwatchId = setInterval(this.updateTime, 1000)
  }

  stopCount = () => {
    clearInterval(this.stopwatchId)
  }

  updateTime = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))

    const {minutes, seconds} = this.state
    let newMinutes = minutes
    let newSeconds = seconds

    if (seconds === 60) {
      newMinutes += 1
      newSeconds = 0

      this.setState({
        minutes: newMinutes,
        seconds: newSeconds,
      })
    }
  }

  resetTime = () => {
    this.setState({
      seconds: 0,
      minutes: 0,
    })
  }

  render() {
    const {minutes, seconds} = this.state
    let displayMinutes = `${minutes}`
    let displaySeconds = `${seconds}`

    if (minutes < 10) {
      displayMinutes = '0'.concat(minutes)
    }

    if (seconds < 10) {
      displaySeconds = '0'.concat(seconds)
    }

    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="horizontal">
            <img
              className="stopwatch-img"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>
            {displayMinutes}:{displaySeconds}
          </h1>
          <div className="horizontal">
            <button
              type="button"
              className="btn-style start"
              onClick={this.startCount}
            >
              Start
            </button>
            <button
              type="button"
              className="btn-style stop"
              onClick={this.stopCount}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn-style reset"
              onClick={this.resetTime}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
