const express = require('express');
const weatherFactory = require('./util/weather-middle');
const morgan = require('morgan')('dev');
const errorHandler = require('./util/error-handler');
const api = require('./util/get-weather-location');

const weatherMiddleWare = weatherFactory(api);

const app = express();

app.use(morgan);
app.use(express.json());
app.use(weatherMiddleWare);

app.post('/', (req, res, next) => {
  res.json(req.weatherData);
});

app.use(errorHandler());

module.exports = app;

