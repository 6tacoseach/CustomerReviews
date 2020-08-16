import React, { useState, useEffect, useMountEffect } from 'react';
import styles from './../styles/Image.scss';

const Image = (props) => {
  if (props.image) {
    return (
      <img src={props.image} className={styles.topimages}></img>
    )
  }
  if (props.reviewimage) {
    return (
      <img src={props.reviewimage} className={styles.reviewimage}></img>
    )
  }
}

export default Image;