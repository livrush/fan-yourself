angular.module('logoer.controller', [])
.controller('LogoController', function($scope, Colors) {
  $scope.colors = [
    'yo',
    Colors.hex(),
    Colors.hex(),
    Colors.hex(),
    Colors.hex(),
  ];
});

console.log('controller');
