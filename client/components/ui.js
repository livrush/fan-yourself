fanYourself.controller('UICtrl', function() {

})

.directive('ui', function() {
  return {
    scope: {
      ubg: '<',
    },
    restrict: 'E',
    controller: 'UICtrl',
    controllerAs: 'ui',
    bindToController: true,
    templateUrl: './templates/ui.html'
  };
});
