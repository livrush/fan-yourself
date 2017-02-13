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
    'rhombus',
    'heart'
  ];

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

  $scope.addShape = function(shape) {
    console.log('you\'ve got a', shape);
    if (shape === 'circle') {
      console.log('round');
    } else if (shape === 'triangle') {
      console.log('nice');
    } else if (shape === 'square') {
      console.log('lame');
    }
  };



  $scope.test = function(data) {

    console.log(data || 'You did it');
  };
});

console.log('controller');
