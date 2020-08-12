import React from 'react';
import styles from './../style.scss';
import PercentRating from './PercentRating.jsx'

const StarRating = (props) => {

  return (
    <div>
      <h2> Customer reviews</h2>
      <h2>
        {props.rating} out of 5
      </h2>
      <div>
        {props.total} customer ratings
      </div>
      <ul>
        <li>
          5 star
        </li>
        <li>
          4 star
        </li>
        <li>
          3 star
        </li>
        <li>
          2 star
        </li>
        <li>
          1 star
        </li>
      </ul>
      <ul>
        {props.perStar.map((x, i) => {
          return <PercentRating percent={x.percent} i={i} />
        })}
      </ul>
      <div>
        <h3>Review this product</h3>
        <div>Share your thoughts with other customers</div>
      </div>
      <button>Write a customer review</button>
    </div>
  )
}

export default StarRating;