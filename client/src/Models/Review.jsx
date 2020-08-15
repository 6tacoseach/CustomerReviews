import React, { useState, useEffect, useMountEffect } from 'react';
import Stars from './Stars.jsx';
import styles from './../style.scss';
import Image from './Image.jsx';

const Review = (props) => {

  return (
    <div className={styles.review}>
      <div className={styles.userinfo}>
        <ion-icon name="person-circle" size="large"></ion-icon>
        <div className={styles.username}>{props.review.user.userName}</div>
      </div>
      <div className={styles.userinfo}>
        <div className={styles.smallerstar}>
          <Stars rating={props.review.rating} />
        </div>
        <div className={styles.smallertitle}>{props.review.title}</div>
      </div>
      <div>Reviewed in the {props.review.user.location} on {props.review.dateString}</div>
      <div>{props.review.text}</div>
      <div>
        {props.review.images.map((image) => {
          return <Image reviewimage={image} key={image.concat(Math.random()).toString()} />
        })}
      </div>
      <div>{props.review.helpfulClickCount} people found this Helpful</div>
      <div>
        <button>Helpful</button>
        <button>Comment</button>
        <button>Report abuse</button>
      </div>
    </div>
  )

}

export default Review;