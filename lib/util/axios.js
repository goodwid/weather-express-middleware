const axios = require('axios');

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.log('No API key present!');
  process.exit(1);
}

