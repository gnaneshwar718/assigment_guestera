const mongoose = require('mongoose');

// Define the schema for a category
const categorySchema = new mongoose.Schema({
  // The name of the category
  name: String,
  // The image URL for the category
  image: String,
  // The description of the category
  description: String,
  // Whether or not tax is applicable to the category
  taxApplicability: Boolean,
  // The tax rate for the category, if tax is applicable
  tax: Number,
  // The type of tax for the category (e.g. percentage or fixed amount)
  taxType: String
});

// Export the Category model
module.exports = mongoose.model('Category', categorySchema);