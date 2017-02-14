angular.module('logoer.forms', [])
.factory('Auth', function($http) {
  let signup = function(user) {
    console.log(user);
    return $http({
      method: 'POST',
      url: '/signup',
      data: user
    })
    .then(function (resp) {
      return resp;
    });
  };

  let signin = function(user) {
    console.log(user);

  };

  return {
    signin: signin,
    signup: signup
  };
});
