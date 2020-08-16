import React, { useState, useEffect, useMountEffect } from 'react';
import Images from './Images.jsx'
import AllImagesModal from './AllImagesModal.jsx';
import styles from './../styles/CustomerImages.scss';

const CustomerImages = (props) => {
  const [showModal, setShowModal] = useState(false);

  let reviewsWithImages = props.reviews.filter(review => (review.images.length > 0));
  let arraysWithImages = reviewsWithImages.map(review => review.images);
  let allImagesArray = arraysWithImages.flat();

  const handleCick = () => { setShowModal(!showModal) };

  const showAllImgaes = showModal ? (
    <div className={styles.modalbackground}>
      <div>
        <AllImagesModal images={allImagesArray} hideModal={handleCick} />
      </div>
    </div>
  ) : null;


  return (
    <div >
      <h3>Customer images</h3>
      {/* {reviewsWithImages.map((review) => {
        return <Images images={review.images} key={review._id} />
      })} */}
      <div >
        <a className={styles.gallerylink} onClick={handleCick}>See all customer images</a>
        <div>
          {showAllImgaes}
        </div>
      </div>
    </div>
  )

}

export default CustomerImages;