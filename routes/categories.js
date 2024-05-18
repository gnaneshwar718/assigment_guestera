const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Create a new category
router.post('/', async (req, res) => {
  // Create a new Category instance with the request body
  const category = new Category(req.body);
  try {
    // Save the category to the database
    await category.save();
    // Return the newly created category with a 201 status code
    res.status(201).send(category);
  } catch (err) {
    // Return an error message with a 400 status code if the save fails
    res.status(400).send(err);
  }
});

// Get all categories
router.get('/', async (req, res) => {
  try {
    // Find all categories in the database
    const categories = await Category.find().exec();
    // Return the list of categories
    res.send(categories);
  } catch (err) {
    // Return an error message with a 500 status code if the find fails
    res.status(500).send(err);
  }
});

// Get a single category by ID
router.get('/:id', async (req, res) => {
  try {
    // Find a category by ID in the database
    const category = await Category.findById(req.params.id).exec();
    if (!category) {
      // Return a 404 status code if the category is not found
      res.status(404).send({ message: 'Category not found' });
    } else {
      // Return the category if it is found
      res.send(category);
    }
  } catch (err) {
    // Return an error message with a 500 status code if the find fails
    res.status(500).send(err);
  }
});

// Update a single category by ID
router.put('/:id', async (req, res) => {
  try {
    // Find and update a category by ID in the database
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    // Return the updated category
    res.send(category);
  } catch (err) {
    // Return an error message with a 400 status code if the update fails
    res.status(400).send(err);
  }
});

module.exports = router;