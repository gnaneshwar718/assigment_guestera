// Import the Express module and create a new router instance
const express = require('express');
const router = express.Router();

// Import the Subcategory model
const Subcategory = require('../models/subcategory');

// Define a route to create a new subcategory
router.post('/', async (req, res) => {
  // Create a new Subcategory instance with the request body
  const subcategory = new Subcategory(req.body);
  
  try {
    // Save the subcategory to the database
    await subcategory.save();
    
    // Return a 201 Created response with the new subcategory
    res.status(201).send(subcategory);
  } catch (err) {
    // Return a 400 Bad Request response with the error
    res.status(400).send(err);
  }
});

// Define a route to retrieve all subcategories
router.get('/', async (req, res) => {
  try {
    // Find all subcategories in the database
    const subcategories = await Subcategory.find().exec();
    
    // Return the subcategories in the response
    res.send(subcategories);
  } catch (err) {
    // Return a 500 Internal Server Error response with the error
    res.status(500).send(err);
  }
});

// Define a route to retrieve a single subcategory by ID
router.get('/:id', async (req, res) => {
  try {
    // Find the subcategory with the specified ID
    const subcategory = await Subcategory.findById(req.params.id).exec();
    
    // If the subcategory is not found, return a 404 Not Found response
    if (!subcategory) {
      res.status(404).send({ message: 'Subcategory not found' });
    } else {
      // Return the subcategory in the response
      res.send(subcategory);
    }
  } catch (err) {
    // Return a 500 Internal Server Error response with the error
    res.status(500).send(err);
  }
});

// Define a route to update a single subcategory by ID
router.put('/:id', async (req, res) => {
  try {
    // Find and update the subcategory with the specified ID
    const subcategory = await Subcategory.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    
    // Return the updated subcategory in the response
    res.send(subcategory);
  } catch (err) {
    // Return a 400 Bad Request response with the error
    res.status(400).send(err);
  }
});

// Export the router instance
module.exports = router;