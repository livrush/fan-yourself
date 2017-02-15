const db = require('./server.js').db;

console.log(db);

module.exports = {
  signup: function(req, res) {
    console.log(req.body);
    db.collection('users').save(req.body, (err, result) => {
      if (err) { return console.log(err); }
      console.log('saved to database');
      res.redirect('#/match');
    });
  }
};
