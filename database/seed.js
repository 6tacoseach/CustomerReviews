console.log('got to database seed.js')
const mongoose = require('mongoose');
const { Review, Product } = require('./model.js');
const Faker = require('faker');
const catLinks = require('./catLinks.js');

mongoose.connect('mongodb://database/custreviews');

const generateRandomCountry = () => {
  let num = Faker.random.number({ min: 0, max: 40 });
  return num >= 10 ? 'United States' : Faker.address.country();
};

const generateArrayOfImages = () => {
  let random = Faker.random.number({ min: 0, max: 100 });
  let num = Faker.random.number({ min: 3, max: 6 });
  return random >= 30 ? [] : catLinks.getRandomLinks(num);
};

const generateNumOfClicks = () => {
  let num = Faker.random.number({ min: 0, max: 30 });
  return num > 20 ? num : 0
};

const generateReviews = function () {
  let reviews = [];
  let counter = Faker.random.number({ min: 0, max: 100 });
  let start = 0;
  let dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };
  if (counter === start) {
    return [];
  }
  while (start < counter) {
    let dateInstance = Faker.date.past();
    reviews[start] = new Review({
      reviewId: start,
      user: {
        id: start,
        userName: Faker.internet.userName(),
        location: generateRandomCountry()
      },
      rating: Faker.random.number({ min: 1, max: 5 }),
      title: Faker.lorem.words(),
      date: dateInstance,
      dateString: dateInstance.toLocaleDateString("en-US", dateFormat),
      verifiedPurchase: true,
      text: Faker.lorem.paragraphs(),
      images: generateArrayOfImages(),
      helpfulClickCount: generateNumOfClicks()
    });
    start++;
  }
  return reviews;
}

const generateProducts = function () {
  for (var i = 1; i <= 100; i++) {

    let product = new Product({
      productId: i,
      keyWords: [],
      reviews: generateReviews()
    });

    product.save((err) => {
      if (err) {
        console.log('err saving to DB', err);
      } else {
        console.log('doc saved');
      }
    })
  }
}

// TO SEED DATA
generateProducts();

// TO CLEAR ALL DATA
// Product.remove({}, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('files matching {} removed')
//   }
// })

// TO DISPLAY ALL DATA
// Product.find((err, products) => {
//   if (err) {
//     console.log(err)
//   } else {
//     let dbLength = products.length;
//     console.log('these are this many docs: ', dbLength)
//   }
// })