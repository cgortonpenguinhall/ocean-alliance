//  Require the directories and js files
const express = require('express');
const app = express();
const path = require('path');
const config = require(__dirname + '/config.js')
const snotbotData = require(__dirname + '/snotbotData.js');
const log = require(__dirname + '/logger.js');

// send all the static stuff
app.use(express.static(path.join(__dirname + '/public')));

//home page
app.get('/', async function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// datatable
app.get('/datatable', async function (req, res) {
  res.json(await snotbotData.getTableData());
});

//expedition
app.get('/expeditions', async function (req, res) {
  res.json(await snotbotData.getExpeditions());
});

//flights
app.get('/flights', async function (req, res) {
  res.json(await snotbotData.getFlights());
});

//Flight Data
app.get('/flightData*', async function (req, res) {
  res.json(await snotbotData.getFlightData(req.query.flight));
});

//404 status, error, and page
app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname + '/public/404.html'));
});

//Start Sever
app.listen(config.app.port, logServer());

function logServer() {
  log.info('Server running at http://127.0.0.1:' + config.app.port + '/');
};