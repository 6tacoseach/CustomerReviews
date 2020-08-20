import React, { useState, useEffect, useMountEffect } from 'react';
import styles from './../styles/PercentRating.scss';

const PercentRating = (props) => {

  return (
    <div className={styles.starbarbox}>
      <div>{props.stars} star</div>
      <div className={styles.barbox}>
        <div className={styles.barboxfill} style={{ width: `${props.percent}%` }}></div>
      </div>
      <div className={styles.percent}>{props.percent} %</div>
    </div>
  )
}

export default PercentRating;
