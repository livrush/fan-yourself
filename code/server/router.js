var user= require('./userController.js');

module.exports = function(app, express) {
  app.post('/signup', user.signup);
};
