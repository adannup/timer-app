const fs = require('fs');
const path = require('path');
const dataFile = path.join(__dirname, './data.json');

const fetchTimers = () => {
  const timer = fs.readFileSync(dataFile);
  return JSON.parse(timer);
}

const saveTimers = (data) => {
  try {
      fs.writeFile(dataFile, JSON.stringify(data, undefined, 2), (err) => {
       if (err) throw err;
     });
   }catch(err) {
     console.log('An error has been occur', err)
   }
}

const addTimer = (title, project, id) => {
  const newTimer = {
    title,
    project,
    id,
    elapsed: 0,
    runningSince: null
  }

  const timers = fetchTimers();
  timers.push(newTimer);
  saveTimers(timers);
}

const deleteTimer = (timerId) => {
  const timers = fetchTimers();

  const filterTimers = timers.filter(timer => timer.id !== timerId);
  saveTimers(filterTimers);
}

const updateTimer = (timerId, title, project) => {
  const timers = fetchTimers();

  const updatedTimers = timers.map(timer => {
    if(timer.id == timerId){
      return Object.assign({}, timer, {
        title: title,
        project: project
      })
    }else{
      return timer;
    }
  });

  saveTimers(updatedTimers);
}

const stopTimer = (timerId) => {
  const timers = fetchTimers();
  const timeNow = Date.now();

  timers.forEach(timer => {
    if(timer.id === timerId) {
      const delta = timeNow - timer.runningSince;
      timer.elapsed += delta;
      timer.runningSince = null;
    }
  });

  saveTimers(timers);
}

const startTimer = (timerId) => {
  const timers = fetchTimers();
  const timeNow = Date.now();

  timers.forEach(timer => {
    if(timer.id === timerId) {
      timer.runningSince = timeNow;
    }
  });

  saveTimers(timers);
}

module.exports = {
  fetchTimers,
  addTimer,
  deleteTimer,
  updateTimer,
  stopTimer,
  startTimer
}
