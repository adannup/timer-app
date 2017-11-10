import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {
  render() {
    const timers = this.props.timers.map(timer => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onFormUpdate={this.props.onFormUpdate}
        onFormDelete={this.props.onFormDelete}
        onRunningTimer={this.props.onRunningTimer}
      />
    ));
    return(
      <div className='timers'>
        {timers}
      </div>
    )
  }
}

export default EditableTimerList;
