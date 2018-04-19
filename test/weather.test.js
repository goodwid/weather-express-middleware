const { assert } = require('chai');
const weatherFactory = require('../lib/util/weather-middle');
const mockApi = zip => {
  return Promise.resolve({ 
    city: 'Salem',
    state: 'OR'
  });
};

const weatherMiddleWare = weatherFactory(mockApi);

describe('Testing middleware', () => {
  const res = {
    body: {
      zip: '97203'
    }
  };

  it('returns data when given zip', () => {
    const next = (err) => {
      assert.deepEqual(res.weatherData, {
        city: 'Salem',
        state: 'OR'
      });
      assert.isUndefined(err);
    };
  
    weatherMiddleWare(res, null, next);
    
  });
});