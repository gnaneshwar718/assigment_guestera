const mongoose = require('mongoose');

// Define the schema for an item
const itemSchema = new mongoose.Schema({
  // The name of the item
  name: String,
  // The image URL for the item
  image: String,
  // The description of the item
  description: String,
  // Whether or not tax is applicable to the item
  taxApplicability: Boolean,
  // The tax rate for the item, if tax is applicable
  tax: Number,
  // The base price of the item
  baseAmount: Number,
  // The discount amount for the item
  discount: Number,
  // The total price of the item, after applying the discount
  totalAmount: Number,
  // The category that the item belongs to
  category: {
    // The type of the category field is an ObjectId
    type: mongoose.Schema.Types.ObjectId,
    // The category field references the Category model
    ref: 'Category'
  },
  // The subcategory that the item belongs to
  subcategory: {
    // The type of the subcategory field is an ObjectId
    type: mongoose.Schema.Types.ObjectId,
    // The subcategory field references the Subcategory model
    ref: 'Subcategory'
  }
});

// Export the Item model
module.exports = mongoose.model('Item', itemSchema);