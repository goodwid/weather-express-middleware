/**
 *  API interface for weather underground
 * 
 *  Defunct now, except for paid accounts
 * 
 */


const request = require('axios');

const apiKey = process.env.WU_API_KEY;

if (!apiKey) {
  console.log('No API key present!');
  process.exit(1);
}

const getWeather = zip => `http://api.wunderground.com/api/${apiKey}/astronomy/hourly/q/${zip}.json`;

const processWeatherData = res => {
  const { data } = res;
  return Promise.resolve({
    temperature: data.hourly_forecast[0].temp.english
  });
}

module.exports = function getLocationWeather(zip) {
  return request.get(getWeather(zip))
    .then(res => res.body)
    .then(processWeatherData);
};