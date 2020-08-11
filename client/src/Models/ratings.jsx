import React from 'react';
import styles from './../style.scss';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {},

    };


  }




  render() {
    // let numOfReviews = this.props.reviews.length;
    // console.log('props in StarRating', this.props.reviews);
    // console.log('call getRating', this.getRating())
    return (
      <div>
        <h2 className={styles.title}>Add from ratings file</h2>
        {/* <div>{numOfReviews} customer ratings</div> */}
      </div>
    );
  }
}

export default StarRating;