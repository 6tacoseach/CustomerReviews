import React, { useSate, useEffect, useMountEffect } from 'react';
import styles from './../style.scss';

const Image = (props) => {
  return (
    <img src={props.image} className={styles.topimages}></img>
  )
}

export default Image;