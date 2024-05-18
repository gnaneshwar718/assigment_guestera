// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import route modules
const categoryRoutes = require('./routes/categories');
const subcategoryRoutes = require('./routes/subcategories');
const itemRoutes = require('./routes/items');

// Create an instance of the Express app
const app = express();

// Use body-parser middleware to parse JSON and URL-encoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount route modules to specific URLs
app.use('/categories', categoryRoutes);
app.use('/subcategories', subcategoryRoutes);
app.use('/items', itemRoutes);

// Define the MongoDB connection URI
const mongoUri = 'mongodb+srv://gnaneshwar718:Mg5kGqfyfs6MGL1Z@cluster0.rs6fa3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoUri);

// Get a reference to the MongoDB connection
const db = mongoose.connection;

// Handle connection errors
db.on('error', console.error.bind(console, 'connection error:'));

// Log a success message when the connection is established
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the port to listen on (either the environment variable PORT or 3000)
const port = process.env.PORT || 3000;

// Start the server and log a message when it's running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});