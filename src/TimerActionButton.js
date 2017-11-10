import React, { Component } from 'react';

class TimerActionButton extends Component {
  render() {
    if(this.props.timerIsRunning) {
      return (
        <button type="button" className="btn btn-outline-danger w-100" onClick={this.props.onRunningTimer}>Stop</button>
      )
    }else{
      return (
        <button type="button" className="btn btn-outline-success w-100" onClick={this.props.onRunningTimer}>Start</button>
      )
    }
  }
}

export default TimerActionButton;
