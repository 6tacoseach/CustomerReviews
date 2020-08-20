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
        <ul className={styles.starPercentL}>
          <li>5 star</li>
          <li>4 star</li>
          <li>3 star</li>
          <li>2 star</li>
          <li>1 star</li>
        </ul>
        <ul className={styles.starPercentC}>
          <li className={styles.barbox}>
            <div className={styles.barboxfill}></div>
          </li>
          <li className={styles.barbox}>
            <div className={styles.barboxfill}></div>
          </li>
          <li className={styles.barbox}>
            <div className={styles.barboxfill} ></div>
          </li>
          <li className={styles.barbox}>
            <div className={styles.barboxfill}></div>
          </li>
          <li className={styles.barbox}>
            <div className={styles.barboxfill} style={{ width: "50%" }}></div>
          </li>
        </ul>
        <ul className={styles.starPercentR}>
          {props.perStar.map((x) => {
            return <PercentRating percent={x.percent} key={x.rating} />
          })}
        </ul>
      </div>
      <div className={styles.bottomcomment}>
        <h3>Review this product</h3>
        <h5>Share your thoughts with other customers</h5>
        <button className={styles.bottombutton}>Write a customer review</button>
      </div>
    </div>
  )
}

export default StarRating;