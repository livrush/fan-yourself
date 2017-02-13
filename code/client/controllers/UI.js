angular.module('UI.controller', [])
.controller('UIController', function($scope, Colors) {
  $scope.colors = [
    Colors.hex(),
    Colors.hex(),
    Colors.hex(),
    Colors.hex(),
  ];

  $scope.shapes = [
    'triangle',
    'square',
    'circle',
    'pentagon',
    'rhombus'
  ];

  // $scope.positions = [
  //   'top left',
  //   'top center',
  //   'top right',
  //   'center left',
  //   'center center',
  //   'center right',
  //   'bottom left',
  //   'bottom center',
  //   'bottom right',
  // ];

  $scope.positions = {
    1: 'top left',
    2: 'top center',
    3: 'top right',
    4: 'center left',
    5: 'center center',
    6: 'center right',
    7: 'bottom left',
    8: 'bottom center',
    9: 'bottom right'
  };


  $scope.test = function(data) {

    console.log(data || 'You did it');
  };
});

console.log('controller');
