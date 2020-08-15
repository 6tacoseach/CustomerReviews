import React, { useState, useEffect, useMountEffect } from 'react';
import Review from './Review.jsx';

const Reviews = (props) => {


  return (
    <div>
      <h3>Read reviews that mention</h3>
      <div>
        {props.reviews.map((review) => {
          return <Review review={review} key={review.reviewId} />
        })}
      </div>
    </div>
  )

}

export default Reviews;