const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher');

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
    name: String,
    location: String
  },
  rating: Number,
  title: String,
  date: Date,
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
  // TODO:
  // query functions to seed DB
  // !!able to export Product as a key value pair to
  // call funciton on DB files from server
  Product
};

let subEntry1 = new Review({
  reviewId: 1,
  user: {
    id: 1,
    name: 'Lola',
    location: 'United States'
  },
  rating: 3,
  title: 'Bad stuff',
  date: new Date,
  verifiedPurchase: true,
  text: "a lot a lot a lot a lot a lot a lot v v v v",
  images: ["link", "link"],
  helpfulClickCount: 2
})

let subEntry2 = new Review({
  reviewId: 2,
  user: {
    id: 2,
    name: 'Fidel',
    location: 'United States'
  },
  rating: 3,
  title: 'Bad stuff',
  date: new Date,
  verifiedPurchase: true,
  text: "a lot a lot a lot a lot a lot a lot v v v v",
  images: ["link", "link"],
  helpfulClickCount: 2
})

let entry1 = new Product({
  productId: 1,
  keyWords: ['a', 'lot', 'v'],
  reviews: [subEntry1, subEntry2]
});

entry1.save(function (err) {
  if (err) {
    console.log('err in saving to DB', err);
  } else {
    console.log('doc saved');
  }
})

// Product.remove({}, (err) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('files matching {} removed')
//   }
// })

Product.find((err, repos) => {
  if(err) {
    console.log(err)
  } else {
    dbInfo = [];
    for (var i = 0; i < repos.length; i++){
      dbInfo.push(repos[i]._doc)
    }
    console.log('these are your docs: ', dbInfo)
  }
})
