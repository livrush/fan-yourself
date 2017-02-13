console.log('Hello world');

angular.module('logoer', [
  'logoer.fact',
  'UI.controller',
  'ngRoute',
  'ngMessages',
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './app/userInterface/UI.html',
    controller: 'UIController'
  })
  .when('/sign-up', {
    templateUrl: './templates/sign-up.html',
    controller: ''
  })
  .when('/sign-in', {
    templateUrl: './templates/sign-in.html',
    controller: ''
  });
}]);
