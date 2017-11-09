import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimersDashboard from './TimersDashboard';

class App extends Component {
  render() {
    return(
      <div className='container mt-5'>
        <div className='row justify-content-md-center'>
          <div className='col-8'>
            <TimersDashboard />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
