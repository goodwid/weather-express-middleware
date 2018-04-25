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
