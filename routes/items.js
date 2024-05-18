const express = require('express');
const router = express.Router();
const Item = require('../Models/item');

// Create a new item
router.post('/', async (req, res) => {
  // Create a new Item instance with the request body
  const item = new Item(req.body);
  try {
    // Save the item to the database
    await item.save();
    // Return the newly created item with a 201 status code
    res.status(201).send(item);
  } catch (err) {
    // Return an error message with a 400 status code if the save fails
    res.status(400).send(err);
  }
});

// Get all items
router.get('/', async (req, res) => {
  try {
    // Find all items in the database
    const items = await Item.find().exec();
    // Return the list of items
    res.send(items);
  } catch (err) {
    // Return an error message with a 500 status code if the find fails
    res.status(500).send(err);
  }
});

// Get a single item by ID
router.get('/:id', async (req, res) => {
  try {
    // Find an item by ID in the database
    const item = await Item.findById(req.params.id).exec();
    if (!item) {
      // Return a 404 status code if the item is not found
      res.status(404).send({ message: 'Item not found' });
    } else {
      // Return the item if it is found
      res.send(item);
    }
  } catch (err) {
    // Return an error message with a 500 status code if the find fails
    res.status(500).send(err);
  }
});

// Update a single item by ID
router.put('/:id', async (req, res) => {
  try {
    // Find and update an item by ID in the database
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    // Return the updated item
    res.send(item);
  } catch (err) {
    // Return an error message with a 400 status code if the update fails
    res.status(400).send(err);
  }
});

module.exports = router;