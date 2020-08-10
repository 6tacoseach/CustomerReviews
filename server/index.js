const express = require('express');
const path = require('path');
const db = require('../database/model.js');

const app = express();
const PORT = 3004;
const ENDPOINT = '/product/:id';

app.use(ENDPOINT, express.static(path.join(__dirname, '/../public')));

app.use(ENDPOINT, express.json());

app.get('/data/:id', (req, res) => {
  console.log(`got a GET from ${req.params.id} in server`)
  let productId = req.params.id;
  db.Product.find({productId}, (err, product) => {
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
