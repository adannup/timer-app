const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const {fetchTimers, addTimer, deleteTimer, updateTimer, startTimer, stopTimer} = require('./timers.js');

const api = express.Router();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

api.route('/timers')
  .get((req, res) => {
    res.status(200).json(fetchTimers());
  })
  .post((req, res) =>{
    addTimer(req.body.title, req.body.project, req.body.id);
    res.status(200).send('subido');
  })
  .delete((req, res) => {
    deleteTimer(req.body.id);
    res.status(200).send('borrado');
  }).
  put((req, res) => {
    updateTimer(req.body.id, req.body.title, req.body.project);
    res.status(200).send('actualizado');
  });

api
  .post('/timers/start', (req, res) => {
    startTimer(req.body.id);
    res.status(200).send('Timer started');
  })
  .post('/timers/stop', (req, res) => {
    stopTimer(req.body.id);
    res.status(200).send('Timer stoped');
  });

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`);
});
