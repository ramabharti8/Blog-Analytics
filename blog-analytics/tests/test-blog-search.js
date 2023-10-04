// tests/test-blog-search.js
const axios = require('axios');

// Define the URL of your server
const serverUrl = 'http://localhost:3000'; // Change the port if necessary

// Define the search query
const query = 'privacy'; // Change to your desired search query

// Make a GET request to the /api/blog-search route with the query parameter
axios.get(`${serverUrl}/api/blog-search?query=${query}`)
  .then(response => {
    console.log(`Search Results for '${query}':`);
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
