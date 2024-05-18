const mongoose = require('mongoose');

// Define the schema for a subcategory
const subcategorySchema = new mongoose.Schema({
  // The name of the subcategory
  name: String,
  // The image URL for the subcategory
  image: String,
  // The description of the subcategory
  description: String,
  // Whether or not tax is applicable to the subcategory
  taxApplicability: Boolean,
  // The tax rate for the subcategory, if tax is applicable
  tax: Number,
  // The category that the subcategory belongs to
  category: {
    // The type of the category field is an ObjectId
    type: mongoose.Schema.Types.ObjectId,
    // The category field references the Category model
    ref: 'Category'
  }
});

// Export the Subcategory model
module.exports = mongoose.model('Subcategory', subcategorySchema);