var CongoDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this);
  this.top = top - 1;
  this.left = left - 1;
  this.timeBetweenSteps = timeBetweenSteps;
};

CongoDancer.prototype = Object.create(Dancer.prototype);
CongoDancer.prototype.constructor = CongoDancer;

CongoDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // debugger;
  setTimeout(function () { this.step(); }.bind(this), this.timeBetweenSteps);
  // setTimeout(() => this.step(), this.timeBetweenSteps);
};

CongoDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};