fanYourself.controller('UICtrl', function() {

})

.directive('ui', function() {
  return {
    scope: {
      ubg: '<',
      umf: '<',
      ufan: '<',
      show: '<',
    },
    restrict: 'E',
    controller: 'UICtrl',
    controllerAs: 'ui',
    bindToController: true,
    templateUrl: './templates/ui.html'
  };
});
