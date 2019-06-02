const request = require('superagent');

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.log('No API key present!');
  process.exit(1);
}

const getWeather = zip => `http://api.wunderground.com/api/${apiKey}/astronomy/hourly/q/${zip}.json`;

console.log(getWeather('97203'));
function processWeatherData(data) {
  return Promise.resolve({
    temperature: data.hourly_forecast[0].temp.english
  });
}

module.exports = function getLocationWeather(zip) {
  return request.get(getWeather(zip))
    .then(res => res.body)
    .then(processWeatherData);
};