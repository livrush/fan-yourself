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
      console.log(resp.data);
      return resp;
    });
  };

  let signin = function(user) {
    return $http({
      method: 'POST',
      url: '/signin',
      data: user
    })
    .then(function (resp) {
      console.log(resp.data);
      return resp;
    });
  };

  return {
    signin: signin,
    signup: signup
  };
});
