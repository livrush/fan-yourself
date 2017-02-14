console.log('Hello world');

angular.module('logoer', [
  'logoer.fact',
  'UI.controller',
  'auth.control',
  'ngRoute',
  'ngMessages',
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/signup', {
    templateUrl: './app/auth/sign-up.html',
    controller: 'AuthControl'
  })
  .when('/signin', {
    templateUrl: './app/auth/sign-in.html',
    controller: 'AuthControl'
  })
  .when('/', {
    templateUrl: './app/userInterface/UI.html',
    controller: 'UIController'
  });
}]);
