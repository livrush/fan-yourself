angular.module('logoer', [
  'logoer.fact',
  'logoer.UI',
  'logoer.auth',
  'ngRoute',
  'ngMessages',
])
.config( function ($routeProvider) {
  console.log('wtf');
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
