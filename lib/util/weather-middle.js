module.exports = api => {
  return (req, res, next) => {
    if (!req.body.zip) next({err: 'no zip'});
    api(req.body.zip)
      .then(data => {
        req.weatherData = data;
        next();
      })
      .catch(err => next(err));
  };
};
