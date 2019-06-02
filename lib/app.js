const express = require('express');
const weatherFactory = require('./util/weather-middle');
const morgan = require('morgan')('dev');
const errorHandler = require('./util/error-handler');
const api = require('./util/open-weather-api');

const weatherMiddleWare = weatherFactory(api);

const app = express();

app.use(morgan);
app.use(express.json());
app.use(weatherMiddleWare);

app.post('/', (req, res, next) => {
  if(req.weatherData) res.json(req.weatherData);
  else next( {msg: 'No weather data received'} )
});

app.use(errorHandler());

module.exports = app;

