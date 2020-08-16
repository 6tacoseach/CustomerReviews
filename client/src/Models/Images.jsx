import React, { useState, useEffect, useMountEffect } from 'react';
import Image from './Image.jsx'

const Images = (props) => {

  if (props.images) {
    // let fourImages = props.images.filter((image, index) => (index < 4));
    return (
      <div>
        {props.images.map((image) => {
          return <Image image={image} key={image.concat(Math.random()).toString()} />
        })}
      </div>
    )
  }
  if (props.allImages) {
    return (
      <div>
        {props.allImages.map((image) => {
          return <Image image={image} key={image.concat(Math.random()).toString()} />
        })}
      </div>
    )
  }

}

export default Images;