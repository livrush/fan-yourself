angular.module('logoer.auth', [])
.controller('AuthControl', function ($scope, $window, $location, Auth) {
  $scope.user = {
    username: 'asdf',
    email: 'asdf',
    password: 'asdf'
  };

  $scope.signedIn = false;
  $scope.username = false;
  $scope.email = false;
  $scope.password = false;

  $scope.signin = function () {
    Auth.signin($scope.user)
    .then(function (data) {
      // $window.localStorage.setItem('com.logoer', token);
      $scope.signedIn = true;
      $window.username = 'Hold';
      $location.path('/maker');
    })
    .catch(function (error) {
      console.log(error);
      switch (error.data) {
      case 'username':
        $scope.username = true;
        break;
      case 'email':
        $scope.username = false;
        $scope.email = true;
        break;
      case 'password':
        $scope.username = false;
        $scope.email = false;
        $scope.password = true;
        break;
      }
    });
  };

  $scope.signup = function (user) {
    Auth.signup($scope.user)
      .then(function (data) {
        // $window.localStorage.setItem('com.logoer', token);
        $location.path('/maker');
      })
      .catch(function (error) {
        console.log(error);
        switch (error.data) {
        case 'email':
          $scope.username = false;
          $scope.email = true;
          break;
        case 'username':
          $scope.username = true;
          break;
        }
      });
  };
});
