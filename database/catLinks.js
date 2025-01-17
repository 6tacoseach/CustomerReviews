const Faker = require('faker');

const catLinks = [
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat1.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat2.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat3.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat4.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat5.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat6.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat7.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat8.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat9.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat10.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat11.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat12.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat13.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat14.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat15.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat16.jpg"
]


module.exports = {
  getRandomLinks: (num) => {
    let arrayOfLinks = [];
    let count = num;
    let imagesInArray = {}
    while (count > 0) {
      let index = Faker.random.number({ min: 0, max: 15 });
      if (imagesInArray[index]) {
        index = Faker.random.number({ min: 0, max: 15 });
        if (imagesInArray[index]) {
          index = Faker.random.number({ min: 0, max: 15 });
        }
      }
      arrayOfLinks.push(catLinks[index])
      imagesInArray[index] = index;
      count--;
    }
    return arrayOfLinks;
  }
}
