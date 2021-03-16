import React, { useState, useEffect, useMountEffect } from 'react';
import axios from 'axios';
import styles from './../styles/CustomerReviews.scss';
import StarRating from './StarRating.jsx';
import Reviews from './Reviews.jsx'
import CustomerImages from './CustomerImages.jsx';

const CustomerReviews = () => {
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [rating, setRating] = useState(0);
  const [starPercent, setStarPercent] = useState([]);

  let getProduct = () => {
    let productId = window.location.pathname;
    let id = productId.match(/(\d+)/)[0];
    let path = `/data/${id}`
    axios.get(path)
      .then((res) => {
        setReviews(res.data[0].reviews);
        setProduct(res.data)
        return res.data[0].reviews
      })
      .then((array) => {
        let ratingsAdded = array.reduce((acc, val) => (acc + val.rating), 0);
        let numOfReviews = array.length;
        setTotalReviews(numOfReviews);
        let average = (ratingsAdded / numOfReviews).toFixed(1)
        setRating(average);
        return array
      })
      .then((array) => {
        let obj = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        array.forEach(x => (obj[x.rating]++))
        let arr = [];
        var total = array.length;
        for (let key in obj) {
          let rating = key
          let percent = (obj[key] / total * 100).toFixed();
          arr.push({ rating, percent })
        }
        setStarPercent(arr.reverse())
      })
      .catch(console.log)
  };

  useEffect(() => { getProduct() }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.ratings}>
        <StarRating total={totalReviews} rating={rating} perStar={starPercent} />
      </div>
      <div className={styles.reviews}>
        <CustomerImages reviews={reviews} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  )
}

export default CustomerReviews;

// SAMPLE PRODUCT DATA
// product: {
//   productId: Number,
//   keyWords: Array of String,
//   reviews: [
//     {
//       reviewId: Number,
//       user: {
//         id: Number,
//         userName: String,
//         location: String,
//         },
//       rating: Number,
//       title: String,
//       date: Date Object,
//       verifiedPurchase: Boolean,
//       text: String,
//       images: Array of image links,
//       helpfulClickCount: Number
//     },
//   ],
// }