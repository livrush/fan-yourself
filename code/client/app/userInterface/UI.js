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
  ].sort();

  $scope.fonts = [
    'Arial',
    'Helvetica',
    'Times',
    'Comic Sans',
    'Papyrus'
  ].sort();

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
      var result = makeSVG('circle', {'cy': '200', 'cx': '200', 'fill': 'red', 'r': '50'});
      document.getElementById('svg-wrapper').append(result);
      console.log('come on', result);
    } else if (shape === 'triangle') {
      console.log('nice');
    } else if (shape === 'square') {
      console.log('lame');
    }
  };

  $scope.randomColor = function(ele) {
    document.getElementById(ele).value = Colors.hex();
  };

  $scope.test = function(data) {

    console.log(data || 'You did it');
  };
});

console.log('controller');
