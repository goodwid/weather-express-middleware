/**
 * api-agnostic middleware, receives a zip code in the body of a request, makes
 * an API call to get weather information, and attaches it to request object to 
 * pass along.
 * 
 */

module.exports = api => {
  return (req, res, next) => {
    if(!req.body.zip) next();
    api(req.body.zip)
      .then(data => {
        req.weatherData = data;
        next();
      })
      .catch(err => next(err));
  };
};
