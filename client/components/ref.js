fanYourself.controller('refCtrl', function() {

})
.directive('ref', function() {
  return {
    scope: {
      close: '<'
    },
    restrict: 'E',
    controller: 'refCtrl',
    controllerAs: 'ref',
    bindToController: true,
    templateUrl: './templates/ref.html'
  };
});
