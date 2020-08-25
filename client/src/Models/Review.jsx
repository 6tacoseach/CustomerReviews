import React, { useState, useEffect, useMountEffect } from 'react';
import Stars from './Stars.jsx';
import styles from './../styles/Review.scss';
import Image from './Image.jsx';

const Review = (props) => {
  const [helpfulCount, setHelpfulCount] = useState(props.review.helpfulClickCount);
  const [clickToggle, setClickToggle] = useState(false);

  const upVote = () => { setClickToggle(!clickToggle) };

  const message = <div className={styles.thankyou}>Thank you for your feedback.</div>;
  const helpfulbutton =
    <button className={styles.helpfulbuttons} onClick={() => {
      upVote(); setHelpfulCount(helpfulCount + 1)
    }}>
      Helpful
    </button>
  const helpfulClicker = clickToggle ? message : helpfulbutton;

  return (
    <div className={styles.review}>
      <div className={styles.userinfo}>
        <ion-icon className={styles.ionicon} name="person-circle" size="large"></ion-icon>
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
      <div className={styles.reviewinfo3}>{helpfulCount} people found this Helpful</div>
      <div className={styles.reviewbuttons}>
        {helpfulClicker}
        <div className={styles.buttonseparator}>|</div>
        <button className={styles.nobackreviewbuttons}>Comment</button>
        <div className={styles.buttonseparator}>|</div>
        <button className={styles.nobackreviewbuttons}>Report abuse</button>
      </div>
    </div>
  )

}

export default Review;