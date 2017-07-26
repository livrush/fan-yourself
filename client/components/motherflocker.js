fanYourself.controller('MotherflockerCtrl', function() {
  this.getBg = file => {
    return {
      'background-image': `url(../assets/backgrounds/${file}.png)`,
    };
  };
})

.directive('motherflocker', function() {
  return {
    scope: {
      fan: '<',
      mf: '<',
    },
    restrict: 'E',
    controller: 'MotherflockerCtrl',
    controllerAs: 'motherflocker',
    bindToController: true,
    templateUrl: './templates/motherflocker.html'
  };
})
.factory('MotherflockerFact', function() {
  return {
    bodies: [
      {
        name: 'Ryan',
        body: 0,
        fan: {
          top: '110px',
          left: '150px',
        },
      },
      {
        name: 'Yanina',
        body: 1,
        fan: {
          top: '110px',
          left: '150px',
        },
      },
      {
        name: 'Liv',
        body: 2,
        fan: {
          top: '110px',
          left: '150px',
        },
      },
    ]
  }
});
