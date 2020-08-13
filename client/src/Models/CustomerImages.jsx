import React, { useSate, useEffect, useMountEffect } from 'react';
import Images from './Images.jsx'

const CustomerImages = (props) => {

  return (
    <div>
      <h2>Customer images</h2>
      {props.reviews.map((review) => {
        return <Images images={review.images} key={review._id} />
      })}
      <div>
        <a>See all customer images</a>
      </div>
    </div>
  )

}

export default CustomerImages;