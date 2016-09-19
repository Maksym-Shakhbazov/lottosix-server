const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const time = require('./routes/time');

const app = express();

// Run server to listen on port 3002.
const server = app.listen(3002, () => {
  console.log('listening on *:3002');
});

const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: false } ));
app.use(express.static('static'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Set Express routes.
// TODO: move to /routes
routes.get('/time', function(req, res, next) {
  let date = new Date().getTime();
  res.json({ date: date });
});
app.use('/', routes);


module.exports = app;