const express = require('express');
const _ = require('lodash');
const blogData = require('./data'); // Assuming you have a data source or API

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Data Retrieval Middleware
app.get('/api/blog-stats', async (req, res) => {
  try {
    // Mock data or API request (replace with actual API call)
    const blogs = blogData; // Use mock data for testing

    if (!blogs || !Array.isArray(blogs)) {
      return res.status(500).json({ error: 'Invalid or missing blog data' });
    }
     // Debugging: Log the retrieved data to the console
     console.log('blogData for /api/blog-stats:', blogs);

    const totalBlogs = blogs.length;
    const longestBlog = _.maxBy(blogs, 'title');
    const privacyBlogs = blogs.filter(blog => blog.title && blog.title.toLowerCase().includes('privacy'));
    const uniqueTitles = _.uniqBy(blogs, 'title');

    res.json({
      totalBlogs,
      longestBlog: longestBlog ? longestBlog.title : null,
      privacyBlogs: privacyBlogs.length,
      uniqueTitles: uniqueTitles.map(blog => blog.title),
    });
  } catch (error) {
    console.error('Error fetching blog data:', error.message);
    res.status(500).json({ error: 'Failed to fetch blog data' });
  }
});

// Blog Search Middleware
app.get('/api/blog-search', (req, res) => {
  const { query } = req.query;

  try {
    // Mock data or API request (replace with actual API call)
    const blogs = blogData; // Use mock data for testing

    if (!blogs || !Array.isArray(blogs)) {
      return res.status(500).json({ error: 'Invalid or missing blog data' });
    }
    // Debugging: Log the retrieved data to the console
    console.log('blogData for /api/blog-search:', blogs);

    // Perform the case-insensitive search
    const results = blogs.filter(blog => {
      const blogTitle = blog.title ? blog.title.toLowerCase() : '';
      const queryLower = query.toLowerCase();
      return blogTitle.includes(queryLower);
    });

    res.json(results);
  } catch (error) {
    console.error('Error fetching blog data:', error.message);
    res.status(500).json({ error: 'Failed to fetch blog data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
