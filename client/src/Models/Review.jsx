import React, { useState, useEffect, useMountEffect } from 'react';
import Stars from './Stars.jsx';
import styles from './../styles/Review.scss';
import Image from './Image.jsx';

const Review = (props) => {

  return (
    <div className={styles.review}>
      <div className={styles.userinfo}>
        <ion-icon name="person-circle" size="large"></ion-icon>
        <div className={styles.username}>{props.review.user.userName}</div>
      </div>
      <div className={styles.reviewinfo}>
        <div className={styles.smallerstartitle}>
          <div className={styles.smallerstar}>
            <Stars rating={props.review.rating} />
          </div>
          <div className={styles.smallertitle}>{props.review.title}</div>
        </div>
        <div className={styles.reviewstatement}>Reviewed in the {props.review.user.location} on {props.review.dateString}</div>
        <div className={styles.didpurchase}>Verified Purchase</div>
      </div>
      <div className={styles.reviewinfo2}>{props.review.text}</div>
      <div className={styles.reviewimagepadding}>
        {props.review.images.map((image) => {
          return <Image reviewimage={image} key={image.concat(Math.random()).toString()} />
        })}
      </div>
      <div className={styles.reviewinfo3}>{props.review.helpfulClickCount} people found this Helpful</div>
      <div className={styles.reviewbuttons}>
        <button className={styles.helpfulbuttons}>Helpful</button>
        <div className={styles.buttonseparator}>|</div>
        <button className={styles.nobackreviewbuttons}>Comment</button>
        <div className={styles.buttonseparator}>|</div>
        <button className={styles.nobackreviewbuttons}>Report abuse</button>
      </div>
    </div>
  )

}

export default Review;