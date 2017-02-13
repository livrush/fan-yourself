const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let db;

app.listen(PORT, function() {
  console.log('listening on localhost:' + PORT)
})

app.get('/', (req, res) =>
  res.sendFile(__dirname + '/index.html')
);

console.log('Server has appeared')
