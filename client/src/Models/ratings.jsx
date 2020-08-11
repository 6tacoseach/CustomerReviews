import React from 'react';
import styles from './../style.scss';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 2
    };

  }

  render() {
    return (
      <div>
        <h2 className={styles.title}>Add from ratings file</h2>
      </div>
    );
  }
}

export default Add;