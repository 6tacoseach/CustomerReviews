const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const PORT = 3004;
const ENDPOINT = '/custreview';

app.use(express.static(path.join(__dirname, '/../public')));

app.use(express.json());

app.get(ENDPOINT, (req, res) => {
  console.log('got a GET in server')
  db.Product.find((err, products) => {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(products);
      }
      console.log(products[0].reviews[0]);
    })
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON ${PORT}`);
});
