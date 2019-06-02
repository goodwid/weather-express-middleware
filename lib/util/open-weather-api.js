/**
 * API interface for openweathermap.org
 */

const axios = require('axios');

const APPID = process.env.OW_API_KEY;

if (!APPID) {
  console.log('No API key present!');
  process.exit(1);
}

const getWeather = zip => `http://api.openweathermap.org/data/2.5/weather?APPID=${APPID}&zip=${zip}&units=imperial`;

const processWeatherData = res => {
  const { data } = res;
  return Promise.resolve({
    temperature: data.main.temp,
    wind: data.wind,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
  });
}

module.exports = function getLocationWeather(zip) {
  return axios.get(getWeather(zip))
    .then(processWeatherData);
};