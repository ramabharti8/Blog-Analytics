// test-blog-stats.js
const axios = require('axios');

// Define the URL of your server
const serverUrl = 'http://localhost:3000'; // Change the port if necessary

// Make a GET request to the /api/blog-stats route
axios.get(`${serverUrl}/api/blog-stats`)
  .then(response => {
    console.log('Blog Stats:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
