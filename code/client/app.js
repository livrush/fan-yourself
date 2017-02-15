angular.module('logoer', [
  'logoer.services',
  'logoer.forms',
  'logoer.shapes',
  'logoer.UI',
  'logoer.auth',
  'ngDragDrop',
  'ngRoute',
  'ngMessages',
  'ng-token-auth'
])
.config( function ($routeProvider, $authProvider) {
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
  $authProvider.configure({
    apiUrl: 'http://api.example.com',
    storage: 'cookies',
  });
})
.controller('Navigation', function() {

});
