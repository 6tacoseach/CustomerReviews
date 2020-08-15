import React, { useState, useEffect, useMountEffect } from 'react';
import styles from './../style.scss';

const Stars = (props) => {

  const starsArray = [];
  let renderStars = () => {
    let num = props.rating;
    for (var i = 1; i <= 5; i++) {
      if (num >= 1) {
        starsArray.push(<ion-icon name="star-sharp"></ion-icon>);
      } else if (num < 1 && num > 0.4) {
        starsArray.push(<ion-icon name="star-half-sharp"></ion-icon>);
      } else if (num < 0.4) {
        starsArray.push(<ion-icon name="star-outline"></ion-icon>);
      }
      num--
    }
  }

  renderStars();

  return (
    <div className={styles.star}>
      {starsArray}
    </div>
  )

}

export default Stars;