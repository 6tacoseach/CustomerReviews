import React, { useState, useEffect, useMountEffect } from 'react';
import Image from './Image.jsx';
import styles from './../styles/AllImagesModal.scss';

const AllImagesModal = (props) => {

  return (
    <div className={styles.modal}>
      <div className={styles.topbar}>
        <div className={styles.closebuttondiv}>
          <button onClick={props.hideModal} className={styles.buttonx}>x</button>
        </div>
      </div>
      <div className={styles.imagescontainer}>
        <div className={styles.allimagesmodal}>
          {props.images.map(image => {
            return <Image allimages={image} key={Math.random().toString()} />
          })}
        </div>
      </div>
    </div>
  )
}

export default AllImagesModal;