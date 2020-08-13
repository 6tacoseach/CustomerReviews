import React, { useState, useEffect, useMountEffect } from 'react';
import Review from './Review.jsx';

const Reviews = (props) => {

  return (
    <div>
      {props.reviews.map((review) => {
        return <Review review={review} key={review.reviewId} />
      })}
    </div>
  )

}

export default Reviews;