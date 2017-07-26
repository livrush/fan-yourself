fanYourself.controller('MotherflockerCtrl', function(MotherflockerFact) {
  this.mfFan = mf => mf.fan;

  this.mfBodies = MotherflockerFact.bodies;
})

.directive('motherflocker', function() {
  return {
    scope: {
      fan: '<',
      mf: '<',
    },
    restrict: 'E',
    controller: 'MotherflockerCtrl',
    controllerAs: 'mf',
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
          top: '85px',
          left: '160px',
        },
      },
      {
        name: 'Yanina',
        body: 1,
        fan: {
          top: '120px',
          left: '143px',
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
      {
        name: 'Jake',
        body: 3,
        fan: {
          top: '70px',
          left: '140px',
        },
      },
      {
        name: 'Julian',
        body: 4,
        fan: {
          top: '130px',
          left: '145px',
        },
      },
      {
        name: 'Alan',
        body: 5,
        fan: {
          top: '120px',
          left: '140px',
        },
      },
    ]
  }
});
