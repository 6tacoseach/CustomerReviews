import React from 'react';
import ReactDom from 'react-dom';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: ['review1', 'review2'],
    };
  }

  render() {
    return (
      <div>Something {this.state.reviews[0]}</div>
    );
  }
}

ReactDom.render(<ReviewSection />, document.getElementById('reviews'));
