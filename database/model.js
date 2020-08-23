console.log('got to database model.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb://database/custreviews');

// COMMENT OUT CONNECT FUNCTION ABOVE AND
// UNCOMMMENT FUNCTION BELLOW FOR LOCAL CHANGES
// mongoose.connect('mongodb://localhost/custreviews');

const reviewSchema = mongoose.Schema({
  reviewId: {
    type: Number,
    unique: true
  },
  user: {
    id: {
      type: Number,
      unique: true
    },
    userName: String,
    location: String
  },
  rating: Number,
  title: String,
  date: Date,
  dateString: String,
  verifiedPurchase: Boolean,
  text: String,
  images: Array,
  helpfulClickCount: Number
});

const productSchema = mongoose.Schema({
  productId: {
    type: Number,
    unique: true
  },
  keyWords: Array,
  reviews: Array
});

const Review = mongoose.model('Review', reviewSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product,
  Review,
};