import React, { useState, useEffect, useMountEffect } from 'react';
import Image from './Image.jsx';
import styles from './../styles/AllImagesModal.scss';

const AllImagesModal = (props) => {

  return (
    <div className={styles.modal}>
      <div className={styles.closebutton}>
        <button onClick={props.hideModal}>X</button>
      </div>
      <div className={styles.allimagesmodal}>
        {props.images.map(image => {
          return <Image image={image} key={Math.random().toString()} />
        })}
      </div>
    </div>
  )
}

export default AllImagesModal;