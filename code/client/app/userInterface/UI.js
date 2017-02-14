angular.module('logoer.UI', [])
.controller('UIControl', function($scope, Colors, Shapes) {
  $scope.test = function(data) {
    // Simple test function for html
    console.log(data || 'Error: supplied data is ' + data);
  };

  $scope.shapesList = [];
  $scope.shapesCache = [];
  $scope.colorsCache = [];

  // PRESET VALUES
  $scope.type = false;
  $scope.color = '#000000';
  $scope.prevColor = '#000000';
  $scope.savedColor = '#000000';
  $scope.selectedShape = 'circle';
  $scope.selectedSize = 25;
  $scope.selectedPosition = 5;

  $scope.formChange = function(bool) {
    $scope.type = bool;
    if(bool) {
      document.getElementById('textHeader').style.background = '#ffffff';
      document.getElementById('shapeHeader').style.background = '#ffafaf';
    } else {
      document.getElementById('textHeader').style.background = '#ffafaf';
      document.getElementById('shapeHeader').style.background = '#ffffff';
    }
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
    'diamond',
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
    // console.log(result);
    // $scope.shapesCache.push(result);
    $scope.shapesList.push(shape);
  };

  $scope.removeShape = function() {
    let i = document.getElementById('deleteShape').selectedIndex;
    console.log(i);
    Shapes.del(i);
    $scope.shapesCache.splice(i, 1);
    document.getElementById('deleteShape').selectedIndex = 0;
  };

  $scope.changeColor = function(input) {
    $scope.prevColor = $scope.color;
    input = input || document.getElementById('hexColor').value;
    $scope.color = input;
    Colors.change(input);
  };

  $scope.previousColor = function() {
    let input = $scope.prevColor;
    $scope.prevColor = $scope.color;
    $scope.color = input;
    Colors.change(input);
  };

  $scope.randomColor = function() {
    $scope.prevColor = $scope.color;
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

  $scope.saveColor = function(color) {
    if (!$scope.colorsCache.includes(color)) {
      if ($scope.colorsCache.length === 7) {
        $scope.colorsCache.splice(0, 1);
      }
      $scope.colorsCache.push(color);
    }
  };

});
