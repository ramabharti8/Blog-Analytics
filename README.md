# Blog-Analytics
This is a README file for the Blog Analytics and Search Tool developed using Express.js and Lodash. This tool is designed to provide insightful statistics about blogs retrieved from a third-party blog API and to implement a blog search endpoint.

# Technology Tools Used
Express.js: This Node.js web application framework is used to create the server and define the routes for handling API requests.

Lodash: A JavaScript utility library, Lodash is used for data analysis, including calculations and operations on the retrieved blog data.

# Getting Started
Before running the application, make sure you have Node.js installed on your system.

01. Clone this repository to your local machine.
02. Install the required dependencies using npm:  npm install

03. Start the server: npm start

The server will start on port 3000 by default, but you can change it in the app.js file if needed.

# Usage
## Data Retrieval
1 The tool provides a route at /api/blog-stats for fetching and analyzing blog data.

2 Make a GET request to /api/blog-stats to retrieve the blog data. The middleware will make a curl request to fetch the data from the third-party blog API.

## Data Analysis
After fetching the data, Lodash is used to perform the following analytics:

1. Calculate the total number of blogs fetched.
2. Find the blog with the longest title.
3. Determine the number of blogs with titles containing the word "privacy."
4. Create an array of unique blog titles (no duplicates).

## Response
The client will receive a JSON object containing the following statistics:

1. Total number of blogs.
2. The title of the longest blog.
3. Number of blogs with "privacy" in the title.
4. An array of unique blog titles.

## Blog Search Endpoint
1. An additional route at /api/blog-search is provided for searching blogs based on a query parameter.

2. Make a GET request to /api/blog-search?query=privacy to search for blogs containing the provided query string. The search is case-insensitive.

## Error Handling
Error handling is implemented throughout the application to handle any errors that may occur during data retrieval, analysis, or search processes. If the third-party API is unavailable or returns an error, an appropriate error message will be sent as a response.

# Conclusion
This Blog Analytics and Search Tool provides valuable insights into blog data retrieved from a third-party API and offers a search functionality for users. Additionally, it ensures error handling and provides a caching mechanism for enhanced performance. Enjoy using this tool for your blog analytics and search needs!
