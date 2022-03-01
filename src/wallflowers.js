var WallflowerDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this);
  this.top = top - 1;
  this.left = left - 1;
  this.timeBetweenSteps = timeBetweenSteps;
};

WallflowerDancer.prototype = Object.create(Dancer.prototype);
WallflowerDancer.prototype.constructor = WallflowerDancer;

WallflowerDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // debugger;
  // $("body").height()

  // Initially: dancer is on the left side
  // with each step -> increment this.left




  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // setTimeout(() => this.step(), this.timeBetweenSteps);
};

WallflowerDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: getRandomInt(10,100)
  };
  this.$node.css(styleSettings);
};

var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};