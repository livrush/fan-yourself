console.log('Hello world');

angular.module('logoer', [
  'logoer.fact',
  'UI.controller',
  'ngRoute',
  'ngMessages',
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', { templateUrl: 'index.html', controller: 'LogoController' });
}]);
