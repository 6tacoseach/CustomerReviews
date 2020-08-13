import React, { useState, useEffect, useMountEffect } from 'react';
import Review from './Review.jsx';

const Reviews = (props) => {

  return (
    <div>
      some reviews
      {console.log('props in Reviews', props.reviews)}
      {props.reviews.map((review) => {
        return <Review review={review} key={review.reviewId} />
      })}
    </div>
  )

}

export default Reviews;