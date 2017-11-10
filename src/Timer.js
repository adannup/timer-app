import React, { Component } from 'react';
import { renderElapsedString } from './utils/timers';
import TimerActionButton from './TimerActionButton';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggleRunningClick = this.handleToggleRunningClick.bind(this);
  }

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleDelete() {
    this.props.onFormDelete(this.props.id);
  }

  handleToggleRunningClick() {
    this.props.onRunningTimer(this.props.id);
  }

  render() {
    const elapsedString = renderElapsedString(this.props.elapsed, this.props.runningSince);

    return (
      <div className="card text-center mt-3">
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.project}</h6>
          <h3>{elapsedString}</h3>
          <div className='float-right m-1'>
            <button type="button" className="btn btn-light m-1"><i className="material-icons" onClick={this.handleDelete}>delete</i></button>
            <button type="button" className="btn btn-light m-1"><i className="material-icons" onClick={this.props.onFormOpen}>mode_edit</i></button>
          </div>
          <TimerActionButton
            timerIsRunning={!!this.props.runningSince}
            onRunningTimer={this.handleToggleRunningClick}
          />
        </div>
      </div>
    )
  }
}

export default Timer;
