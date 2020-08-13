import React, { useState, useEffect, useMountEffect } from 'react';
import axios from 'axios';
import styles from './../style.scss';
import StarRating from './StarRating.jsx';
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
    <div>
      <div className={styles.ratings}>
        <div >
          <StarRating total={totalReviews} rating={rating} perStar={starPercent} />
        </div>
      </div>
      <div className={styles.reviews}>
        <CustomerImages reviews={reviews} />
      </div>
    </div>
  )
}

export default CustomerReviews;

// SAMPLE PRODUCT DATA
// product: {
//   productId: 1,
//   keyWords: [],
//   reviews: [
//     {
//       reviewId: 1,
//       user: {
//         id: 1,
//         userName: 'mike1212',
//         location: 'United States'
//       },
//       rating: 3,
//       title: 'not so bad',
//       date: "2019-08-13T17:51:35.537Z",
//       verifiedPurchase: true,
//       text: 'Fugiat eius voluptatem asperiores ducimus accusantium vitae quia esse. Tenetur quia sunt fuga. Quia eaque et. Cumque nihil possimus facilis porro alias. Maxime eum et qui nisi quidem alias. Et harum voluptatum perferendis rerum nostrum. Voluptatem sunt nesciunt culpa accusantium ut debitis ipsa est quod. Quos dolor nisi. Totam quia et. Quo ullam maiores et repudiandae aut qui sunt quos explicabo. Temporibus necessitatibus quasi. Et eveniet rerum ratione perspiciatis commodi nulla cumque et. Omnis temporibus nesciunt eius. Soluta provident culpa ut consequuntur nostrum facere fugit voluptas omnis.',
//       images: [],
//       helpfulClickCount: 18
//     }
//   ]
// }