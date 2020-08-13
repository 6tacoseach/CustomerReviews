import React, { useState, useEffect, useMountEffect } from 'react';

const Review = (props) => {

  return (
    <div>
      {console.log('props in Review', props.review)}
      <div>{props.review.user.userName}</div>
      <div>{props.review.rating}</div>
      <div>{props.review.title}</div>
      <div>{props.review.user.location}</div>
      <div>{props.review.date}</div>
      <div>{props.review.text}</div>
      <div>{props.review.helpfulClickCount}</div>
      <button>Helpful</button>
      <button>Comment</button>
      <button>Report abuse</button>
    </div>
  )

}

export default Review;