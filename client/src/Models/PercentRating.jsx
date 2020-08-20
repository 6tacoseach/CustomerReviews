import React, { useState, useEffect, useMountEffect } from 'react';

const PercentRating = (props) => {

  return (
    // <div>
    //   <div>{props.key}</div>
    //   <li className={styles.barbox}>
    //     <div className={styles.barboxfill} style={{ width: "50%" }}></div>
    //   </li>

    // </div>
    <li>{props.percent} %</li>
  )
}

export default PercentRating;
