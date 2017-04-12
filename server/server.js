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

app.post('/signup', function(req, res) {
  let username = req.body.username;
  let email = req.body.email;
  db.collection('users').find({username: username}).toArray(function(err, docs) {
    if (docs[1]) {
      console.log('We have a user named that already');
      res.status(403).send('username');
    } else {
      db.collection('users').find({email: email}).toArray(function(err, docs) {
        if (docs[1]) {
          console.log('That email is currently in use');
          res.status(403).send('email');
        } else {
          db.collection('users').save(req.body, (err, result) => {
            if (err) { return console.log(err); }
            console.log('saved to database');
            res.status(201).send('/maker');
          });
        }
      });
    }
  });
});

app.post('/signin', function(req, res) {
  let username = req.body.username;
  let email = req.body.email;
  db.collection('users').find({username: username}).toArray(function(err, docs) {
    if (!docs[1]) {
      console.log('We have a user named that already');
      res.status(403).send('username');
    } else {
      db.collection('users').find({email: email}).toArray(function(err, docs) {
        if (!docs[1]) {
          console.log('That email is currently in use');
          res.status(403).send('email');
        } else {
          // db.collection('users').save(req.body, (err, result) => {
          //   if (err) { return console.log(err); }
            console.log('saved to database');
            res.status(201).send('/maker');
          // });
        }
      });
    }
  });
});

app.post('/api/logos', function(req, res) {
  let logo = req.body;
  db.collection('logos').save(logo, (err, result) => {
    if (err) { return console.log(err); }
    console.log('saved to database');
    res.status(201).send('/maker');
  });
});
