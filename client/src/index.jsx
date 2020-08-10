import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };

    this.getProduct = this.getProduct(this);

  };

  getProduct() {
    axios.get(`/product`)
      .then((res) => {
        console.log(res.data),
        this.setState({product: res.data})})
      .catch(console.log)
  }

  // componentDidMount() {
  //   this.getProduct()
  // }

  render() {
    return (
      <div>Something</div>
    )
  }

}

ReactDom.render(<ReviewSection />, document.getElementById('reviews'));

// SAMPLE PRODUCT DATA
// product: {
//   productId: 1,
//   keyWords: [],
//   reviews: [
//     {
//       reviewId: 1,
//       user: {
//         id: 1,
//         userName: 'mike1212',
//         location: 'United States'
//       },
//       rating: 3,
//       title: 'not so bad',
//       date: "2019-08-13T17:51:35.537Z",
//       verifiedPurchase: true,
//       text: 'Fugiat eius voluptatem asperiores ducimus accusantium vitae quia esse. Tenetur quia sunt fuga. Quia eaque et. Cumque nihil possimus facilis porro alias. Maxime eum et qui nisi quidem alias. Et harum voluptatum perferendis rerum nostrum. Voluptatem sunt nesciunt culpa accusantium ut debitis ipsa est quod. Quos dolor nisi. Totam quia et. Quo ullam maiores et repudiandae aut qui sunt quos explicabo. Temporibus necessitatibus quasi. Et eveniet rerum ratione perspiciatis commodi nulla cumque et. Omnis temporibus nesciunt eius. Soluta provident culpa ut consequuntur nostrum facere fugit voluptas omnis.',
//       images: [],
//       helpfulClickCount: 18
//     }
//   ]
// }