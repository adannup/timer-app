import React, { Component } from 'react';

class TimerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || '',
      project: this.props.project || ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleProjectChange(e) {
    this.setState({
      project: e.target.value
    })
  }

  handleSubmit() {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project
    })
  }

  render() {
    const buttonText = this.props.id? 'Update' : 'Create'
    return (
      <div className="card mt-3">
        <div className="card-body">
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" value={this.state.title} onChange={this.handleTitleChange}/>
          </div>
          <div className="form-group">
            <label>Project</label>
            <input type="text" className="form-control" value={this.state.project} onChange={this.handleProjectChange}/>
          </div>
          <div className='mt-4'>
            <button type="button" className="btn btn-outline-primary w-50" onClick={this.handleSubmit}>{buttonText}</button>
            <button type="button" className="btn btn-outline-danger w-50" onClick={this.props.onFormOpen}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TimerForm;
