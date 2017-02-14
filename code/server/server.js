const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const PORT = process.env.PORT;
const MONGOURI = process.env.MONGOURI;
let db;



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

MongoClient.connect(MONGOURI, (err, database) => {
  if (err) { return console.log(err); }
  db = database;
  app.listen(PORT, () => {
    console.log('listening on 3000');
  });
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  db.collection('users').save(req.body, (err, result) => {
    if (err) { return console.log(err); }
    console.log('saved to database');
    res.redirect('#/match');
  });
});
