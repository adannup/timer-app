import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editFormOpen: false
    }

    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleFormOpen() {
    const value = this.state.editFormOpen ? false : true;
    console.log(value);
    this.setState({
      editFormOpen: value
    });
  }

  handleUpdate(timer){
    this.props.onFormUpdate(timer);
    this.handleFormOpen();
  }

  render() {
    if(this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormOpen={this.handleFormOpen}
          onFormSubmit={this.handleUpdate}
        />
      );
    }else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
          onFormOpen={this.handleFormOpen}
          onFormDelete={this.props.onFormDelete}
        />
      );
    }
  }
}

export default EditableTimer;
