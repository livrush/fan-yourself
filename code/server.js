const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;
let db;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client'));

app.listen(PORT, function() {
  console.log('listening on localhost:' + PORT)
})

app.get('/', (req, res) =>
  res.sendFile(__dirname + '/client/')
);
