const request = require('request');

exports.getTimers = (callback) => {
  const options = {
    url: 'http://localhost:3300/api/timers',
    method: 'get',
    headers: {
      Accept: 'application/json'
    },
    json: true
  }
  request(options, (error, response, body) => {
    callback(body);
  });
}

exports.addTimer = (data) => {
  const options = {
    url: 'http://localhost:3300/api/timers',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: data,
    json: true
  }
  request(options, (error, response, body) => {

  });
}

exports.deleteTimer = (timerId) => {
  const options = {
    url: 'http://localhost:3300/api/timers',
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      id: timerId
    },
    json: true
  }
  request(options, (error, response, body) => {

  });
}

exports.startTimer = (timerId) => {
  const options = {
    url: 'http://localhost:3300/api/timers/start',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      id: timerId
    },
    json: true
  }
  request(options, (error, response, body) => {

  });
}

exports.stopTimer = (timerId) => {
  const options = {
    url: 'http://localhost:3300/api/timers/stop',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      id: timerId
    },
    json: true
  }
  request(options, (error, response, body) => {

  });
}
