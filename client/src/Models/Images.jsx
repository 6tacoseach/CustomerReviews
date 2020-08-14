import React, { useState, useEffect, useMountEffect } from 'react';
import Image from './Image.jsx'

const Images = (props) => {

  return (
    <div>
      {props.images.map((image) => {
        return <Image image={image} key={image.concat(Math.random()).toString()} />
      })}
    </div>
  )

}

export default Images;