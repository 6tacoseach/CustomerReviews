const express = require('express');
const path = require('path');
const db = require('../database/model.js');

const app = express();
const PORT = 3004;
const ENDPOINT = '/product';

app.use(express.static(path.join(__dirname, '/../public')));

app.use(express.json());

app.get(ENDPOINT, (req, res) => {
  console.log(`got a GET from ${ENDPOINT} in server`)
  db.Product.find({productId: 1}, (err, product) => {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(product);
      }
      console.log(product);
    })
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON ${PORT}`);
});
