fanYourself.controller('UICtrl', function() {

})
/* END SOLUTION */
.directive('ui', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'UICtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: './templates/ui.html'
  };
});
