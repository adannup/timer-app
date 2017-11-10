import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import {createTimer} from './utils/timers';
import client from './client';

class TimersDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timers: [],
    }

    this.addTimer = this.addTimer.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.handleDeteleForm = this.handleDeteleForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
    this.handleRunningTimer = this.handleRunningTimer.bind(this);
  }

  componentDidMount() {
    this.loadTimersFromServer();
    setInterval(this.loadTimersFromServer, 5000);
  }

  loadTimersFromServer = () => {
    client.getTimers((serverTimers) => (
        this.setState({ timers: serverTimers })
      )
    );
  };

  handleSubmitForm(timer) {
    this.addTimer(timer);
  }

  addTimer(timer) {
    const t = createTimer(timer);

    client.addTimer(t);
    this.setState({
      timers: this.state.timers.concat(t)
    });
  }

  handleUpdateForm(timer) {
    this.updateTimer(timer);
  }

  updateTimer(timerUpdate){
    const nextTimers = this.state.timers.map(timer => {
      if(timer.id === timerUpdate.id){
        return Object.assign({}, timer, {
          title: timerUpdate.title,
          project: timerUpdate.project
        });
      }else {
        return timer;
      }
    });

    this.setState({
      timers: nextTimers,
    });
  }

  handleDeteleForm(timerId) {
    this.deleteForm(timerId);
  }

  deleteForm(timerId) {
    this.setState({
      timers: this.state.timers.filter(timer => timer.id !== timerId)
    });

    client.deleteTimer(timerId);
  }

  handleRunningTimer(timerId) {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map(timer => {
        if(timer.id === timerId) {
          if(!!timer.runningSince){
            const lastElapsed = now - timer.runningSince;
            return Object.assign({}, timer, {
              elapsed: timer.elapsed + lastElapsed,
              runningSince: null,
            });
          }else {
            return Object.assign({}, timer, {
              runningSince: now,
            });
          }
        }else {
          return timer;
        }
      })
    })
  }

  render() {
    return(
      <div className='timers-dashboard'>
        <EditableTimerList
          timers={this.state.timers}
          onFormUpdate={this.handleUpdateForm}
          onFormDelete={this.handleDeteleForm}
          onRunningTimer={this.handleRunningTimer}
        />
        <ToggleableTimerForm
          isOpen={false}
          onFormSubmit={this.handleSubmitForm}
        />
      </div>
    );
  }
}

export default TimersDashboard;
