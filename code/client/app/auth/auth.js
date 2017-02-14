angular.module('logoer.auth', [])
.controller('AuthControl', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function (user) {
    Auth.signup($scope.user);
      // .then(function (token) {
      //   $window.localStorage.setItem('com.logoer', token);
      //   $location.path('/maker');
      // })
      // .catch(function (error) {
      //   console.error(error);
      // });
  };


});
