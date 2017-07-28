fanYourself.controller('AppCtrl', function(MotherflockerFact) {

  var update = function(what) {
    return function(up) {
      console.log(this)
      if (up) {
        if (this[what] < this[what + 's'] - 1) {
          this[what]++;
        } else {
          this[what] = 0;
        }
      } else {
        if (this[what] > 0) {
          this[what]--;
        } else {
          this[what] = this[what + 's'] - 1;
        }
      }
    };
  };

  // TEXT OVERLAYS
  this.about = false;
  this.ref = false;
  this.show = function(target) {
    this.about = false;
    this.ref = false;
    this[target] = true;
    console.log('app', this[target]);
  }.bind(this);
  this.close = function() {
    this.about = false;
    this.ref = false;
  }.bind(this);


  // ALTERING MOTHERFLOCKERS
  this.mfs = MotherflockerFact.bodies;
  this.motherflockers = this.mfs.length;
  this.motherflocker = 0;
  this.updateMf = update('motherflocker').bind(this);

  // ALTERING BACKGROUNDS
  this.backgrounds = 12;
  this.background = 0;
  this.updateBg = update('background').bind(this);

  // ALTERING BACKGROUNDS
  this.fans = 5;
  this.fan = 0;
  this.updateFan = update('fan').bind(this);
})
.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'app',
    bindToController: true,
    templateUrl: './templates/app.html'
  };
});
