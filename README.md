# Express middleware for weather data

Takes a POST request to / with a zip code in the body, makes a request to an API and attaches the data to the request object.

Includes sample API request handlers for Weather Underground and Open Weather Map APIs.

To demo:

1. clone this repo
1. run `yarn` && `npm i`
1. run `yarn start`
1. Make a post request to `http://localhost/9000`

<pre>
> curl -X POST http://localhost:9000 -H 'Content-Type: application/json' -d '{ "zip": "97203"}'
</pre>
```json
{ "temperature": 78.24, "wind": { "speed": 8.05, "deg": 270 }, "humidity" :53,"pressure": 1012}
```
