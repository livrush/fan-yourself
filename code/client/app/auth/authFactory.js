angular.module('logoer.forms', [])
.factory('Auth', function() {
  let signup = function(user) {
    console.log(user);
  };

  let signin = function(user) {
    console.log(user);
  };

  return {
    signin: signin,
    signup: signup
  };
});
