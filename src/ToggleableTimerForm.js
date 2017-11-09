import React, { Component } from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen:false
    }

    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormOpen() {
    const value = this.state.isOpen ? false : true;
    this.setState({
      isOpen: value
    });
  }

  handleSubmit(timer){
    this.props.onFormSubmit(timer);
    this.handleFormOpen();
  }

  render() {
    if(this.state.isOpen) {
      return (
        <TimerForm
          onFormOpen={this.handleFormOpen}
          onFormSubmit={this.handleSubmit}
        />
      );
    } else {
      return (
        <div className="card mt-3">
          <div className="card-body">
            <button type="button" className="btn btn-outline-info w-100" onClick={this.handleFormOpen}>+</button>
          </div>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm;
