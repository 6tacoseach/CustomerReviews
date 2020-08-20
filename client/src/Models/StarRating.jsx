import React, { useState, useEffect, useMountEffect } from 'react';
import PercentRating from './PercentRating.jsx';
import Stars from './Stars.jsx';
import styles from './../styles/StarRating.scss'

const StarRating = (props) => {

  return (
    <div className={styles.fivestar}>
      <div className={styles.title}> Customer reviews</div>
      <div className={styles.ratingsummery}>
        <div className={styles.staraverage}><Stars rating={props.rating} /></div>
        <div className={styles.ratingaverage}>{props.rating} out of 5</div>
      </div>
      <div className={styles.totalratings}>
        {props.total} customer ratings
      </div>
      <div className={styles.starbars}>
        <div >
          {props.perStar.map((x) => {
            return <PercentRating percent={x.percent} stars={x.rating} key={x.rating} />
          })}
        </div>
      </div>
      <div className={styles.bottomcomment}>
        <div className={styles.reviewproduct}>Review this product</div>
        <div className={styles.sharethoughts}>Share your thoughts with other customers</div>
        <button className={styles.bottombutton}>Write a customer review</button>
      </div>
    </div>
  )
}

export default StarRating;