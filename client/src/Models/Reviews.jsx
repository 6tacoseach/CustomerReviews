import React, { useState, useEffect, useMountEffect } from 'react';
import Review from './Review.jsx';
import styles from './../styles/Reviews.scss';

const Reviews = (props) => {
  const [reviewsToggle, setReviewsToggle] = useState(true);

  const allReviews = props.reviews;
  const nationalReviews = [];
  const topNationalReviews = [];
  const internationalReviews = [];
  const topInternationalReviews = [];
  const reviewsToSort = [];

  allReviews.forEach((review) => {
    if (review.user.location === 'United States') {
      nationalReviews.push(review);
    } else {
      internationalReviews.push(review);
    }
  });

  nationalReviews.forEach((review) => {
    if (review.helpfulClickCount > 0) {
      topNationalReviews.push(review);
    }
  });

  internationalReviews.forEach((review) => {
    if (review.helpfulClickCount > 0) {
      topInternationalReviews.push(review);
    }
  });

  const toggleReviews = () => {
    setReviewsToggle(!reviewsToggle);
  };

  let selectReviews, reviewsSelected, filteredNational, filteredInternational, topOrNot, allOrNot;
  if (reviewsToggle) {
    selectReviews = <button onClick={toggleReviews}>See top reviews</button>;
    allOrNot = <h3>All reviews</h3>
    filteredNational =
      <div>
        {nationalReviews.map((review) => {
          return <Review review={review} key={review.reviewId} />
        })}
      </div>;
    topOrNot = <h3>International reviews</h3>;
    filteredInternational =
      <div>
        {internationalReviews.map((review) => {
          return <Review review={review} key={review.reviewId} />
        })}
      </div>;
  } else if (!reviewsToggle) {
    selectReviews = <button onClick={toggleReviews}>See all reviews</button>;
    allOrNot = <h3>Top reviews</h3>
    filteredNational =
      <div>
        {topNationalReviews.map((review) => {
          return <Review review={review} key={review.reviewId} />
        })}
      </div>;
    topOrNot = <h3>Top international reviews</h3>;
    filteredInternational =
      <div>
        {topInternationalReviews.map((review) => {
          return <Review review={review} key={review.reviewId} />
        })}
      </div>;
  };

  return (
    <div className={styles.writtenreviews}>
      {allOrNot}
      <div className={styles.reviewinfo}>
        {selectReviews}
      </div>
      {filteredNational}
      <div>
        {topOrNot}
        <h5 className={styles.looklikelink}>Translate all reviews to English</h5>
      </div>
      {filteredInternational}
    </div>
  );

}

export default Reviews;