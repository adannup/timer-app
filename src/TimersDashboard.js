import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import {createTimer} from './utils/timers';

class TimersDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timers: [
        {
          title: 'Practice squat',
          project: 'Gym Chores',
          id: 1,
          elapsed: 5456099,
          runningSince: Date.now(),
        },
        {
          title: 'Bake squash',
          project: 'Kitchen Chores',
          id: 2,
          elapsed: 1273998,
          runningSince: null,
        },
      ],
    }

    this.addTimer = this.addTimer.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.handleDeteleForm = this.handleDeteleForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
  }

  handleSubmitForm(timer) {
    this.addTimer(timer);
  }

  addTimer(timer) {
    const t = createTimer(timer);

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
  }

  render() {
    return(
      <div className='timers-dashboard'>
        <EditableTimerList
          timers={this.state.timers}
          onFormUpdate={this.handleUpdateForm}
          onFormDelete={this.handleDeteleForm}
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
