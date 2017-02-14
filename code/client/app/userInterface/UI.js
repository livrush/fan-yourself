angular.module('logoer.UI', [])
.controller('UIControl', function($scope, Colors, Shapes) {
  $scope.test = function(data) {
    console.log(data || 'Error: supplied data is undefined');
  };

  $scope.shapesCache = [];

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
    'Futura',
    'Times',
    'Comic Sans MS',
    'Papyrus',
    'Courier New',
    'Arial Black',
    'Impact'
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
    $scope.shapesCache.push(`${$scope.shapesCache.length + 1} ${shape}`);
    Shapes.add(shape);
  };

  $scope.removeShape = function(index) {
    // document.getElementsByTagName('svg')[0].children[index].remove();
    Shapes.del(index);
  };

  $scope.randomColor = function(ele) {
    document.getElementById(ele).value = Colors.hex();
  };

  $scope.changeFont = function(font) {
    document.getElementById('mainText').style.fontFamily = font;
  };

});
