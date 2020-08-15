import React, { useState, useEffect, useMountEffect } from 'react';
import Review from './Review.jsx';
import styles from './../styles/Reviews.scss';

const Reviews = (props) => {

  let allReviews = props.reviews;
  let nationalReviews = [];
  let internationalReviews = [];
  allReviews.forEach((review) => {
    if (review.user.location === 'United States') {
      nationalReviews.push(review)
    } else {
      internationalReviews.push(review)
    }
  })

  return (
    <div>
      <h3>Read reviews that mention</h3>
      <div className={styles.reviewinfo}>
        <button>Top reviews</button>
      </div>
      <div>
        {nationalReviews.map((review) => {
          return <Review review={review} key={review.reviewId} />
        })}
      </div>
      <div>
        <h3>Top international reviews</h3>
        <div>Translate all reviews to English</div>
      </div>
      <div>
        {internationalReviews.map((review) => {
          return <Review review={review} key={review.reviewId} />
        })}
      </div>
    </div>
  )

}

export default Reviews;