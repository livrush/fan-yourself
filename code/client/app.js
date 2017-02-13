console.log('Hello world');

angular.module('logoer', [
  'logoer.fact',
  'logoer.controller',
  'ngRoute',
  'ngMessages',
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', { templateUrl: 'index.html', controller: 'LogoController' });
}]);
