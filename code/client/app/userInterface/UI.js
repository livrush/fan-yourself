angular.module('logoer.UI', [])
.controller('UIControl', function($scope, Colors, Shapes) {
  $scope.test = function(data) {
    console.log(data || 'Error: supplied data is undefined');
  };

  $scope.shapesCache = [];

  $scope.type = true;

  $scope.formChange = function(bool) {
    $scope.type = bool;

  };

  $scope.types = [
    'text',
    'shape'
  ].sort();

  // Next up is changing UI to specify between types!!!

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

  $scope.shapes = [
    'triangle',
    'square',
    'circle',
    'pentagon',
    'rhombus',
    'heart'
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
    Shapes.add(shape);
    $scope.shapesCache.push(shape);
  };

  $scope.removeShape = function() {
    let i = document.getElementById('deleteShape').selectedIndex;
    Shapes.del(i);
    $scope.shapesCache.splice(i, 1);
  };

  $scope.changeColor = function() {
    let input = document.getElementById('hexColor').value;
    Colors.change(input);
  };

  $scope.randomColor = function() {
    Colors.change(Colors.hex());
  };

  $scope.changeFont = function(font) {
    document.getElementById('mainText').style.fontFamily = font;
  };

});
