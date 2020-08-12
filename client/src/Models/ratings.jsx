import React from 'react';
import styles from './../style.scss';

const StarRating = (props) => {

  return (
    <div>
      <h2> Customer reviews</h2>
      <h2>
        {props.rating} out of 5
      </h2>
      {props.totalReviews} customer ratings
    </div>
  )
}

export default StarRating;