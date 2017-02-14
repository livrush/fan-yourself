angular.module('logoer', [
  'logoer.services',
  'logoer.shapes',
  'logoer.UI',
  'logoer.auth',
  'ngDragDrop',
  'ngRoute',
  'ngMessages',
])
.config( function ($routeProvider) {
  $routeProvider
  .when('/maker', {
    templateUrl: 'app/userInterface/UI.html',
    controller: 'UIControl'
  })
  .when('/signin', {
    templateUrl: 'app/auth/sign-in.html',
    controller: 'AuthControl'
  })
  .when('/signup', {
    templateUrl: 'app/auth/sign-up.html',
    controller: 'AuthControl'
  })
  .otherwise({
    redirectTo: '/maker'
  });
});
