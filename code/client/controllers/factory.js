angular.module('logoer.fact', [])
.factory('Colors', function() {
  var hex = function() {
    return randomColor();
  }

  return {
    hex: hex
  }
})
