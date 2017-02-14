const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT;
let db;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.listen(PORT, function() {
  console.log('listening on localhost:' + PORT);
});

// app.get('/', (req, res) =>
//   res.sendFile(__dirname + '/client/')
// );

// app.get('/signin', (req, res) =>
//   res.sendFile(__dirname + '/client/app/auth/sign-in.html')
// );
