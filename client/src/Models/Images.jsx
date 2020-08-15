import React, { useState, useEffect, useMountEffect } from 'react';
import Image from './Image.jsx'

const Images = (props) => {

  let fourImages = props.images.filter((image, index) => (index < 4));

  return (
    <div>
      {fourImages.map((image) => {
        return <Image image={image} key={image.concat(Math.random()).toString()} />
      })}
    </div>
  )

}

export default Images;