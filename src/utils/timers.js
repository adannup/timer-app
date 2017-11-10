const uuidv4 = require('uuid/v4')

exports.createTimer = (timer) => {
  return {
    id: uuidv4(),
    title: timer.title || 'Timer',
    project: timer.project || 'Project',
    runningSince: null,
    elapsed: 0
  }
}

const millisecondsToHuman = (ms) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  return `${formatedTime(hours)}:${formatedTime(minutes)}:${formatedTime(seconds)}`;
}

const formatedTime = (time) => {
  return (time <= 9) ? ('0'+ time) : time;
}


exports.renderElapsedString = (elapsed, runningSince) => {
  let totalElapsed = elapsed;
  if (runningSince) {
    totalElapsed += Date.now() - runningSince;
  }
  return millisecondsToHuman(totalElapsed);
}
