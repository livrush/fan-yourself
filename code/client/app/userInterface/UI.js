angular.module('logoer.UI', [])
.controller('UIControl', function($scope, Colors, Shapes) {
  $scope.test = function(data) {
    // Simple test function for html
    console.log(data || 'Error: supplied data is ' + data);
  };

  $scope.shapesCache = [];


  // PRESET VALUES
  $scope.type = false;
  $scope.color = '';
  $scope.savedColor = '#000000';
  $scope.selectedShape = 'circle';
  $scope.selectedSize = 25;
  $scope.selectedPosition = 5;

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
    // 'triangle',
    'square',
    'circle',
    'tall rect',
    'wide rect'
    // 'pentagon',
    // 'rhombus',
    // 'heart'
  ].sort();

  $scope.sizes = {
    petit: 25,
    medium: 50,
    grand: 100
  };

  $scope.positions = {
    'top left': 1,
    'top center': 2,
    'top right': 3,
    'center left': 4,
    'center center': 5,
    'center right': 6,
    'bottom left': 7,
    'bottom center': 8,
    'bottom right': 9
  };

  $scope.addShape = function(shape) {
    let pos = Shapes.position($scope.selectedPosition);
    Shapes.add(shape, $scope.savedColor, pos[0], pos[1], $scope.selectedSize);
    $scope.shapesCache.push(shape);

  };

  $scope.removeShape = function() {
    let i = document.getElementById('deleteShape').selectedIndex;
    console.log(i);
    Shapes.del(i);
    $scope.shapesCache.splice(i, 1);
    document.getElementById('deleteShape').selectedIndex = 0;
  };

  $scope.changeColor = function() {
    let input = document.getElementById('hexColor').value;
    Colors.change(input);
  };

  $scope.randomColor = function() {
    $scope.color = Colors.hex();
    Colors.change($scope.color);
  };

  $scope.setColor = function(color) {
    $scope.savedColor = color;
  };

  $scope.changeFont = function(font) {
    document.getElementById('mainText').style.fontFamily = font;
  };

  $scope.setTextColor = function(color) {
    document.getElementById('mainText').style.color = color;
  };

});
