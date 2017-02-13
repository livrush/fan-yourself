angular.module('logoer.controller', [])
.controller('LogoController', function($scope, Colors) {

  $scope.colors = [
    Colors.hex(),
    Colors.hex(),
    Colors.hex(),
    Colors.hex()
  ];
})

console.log('controller')
