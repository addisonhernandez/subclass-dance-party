var PulsingDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.css({
    'transition-duration': (timeBetweenSteps >> 1) + 'ms',
    'transition-timing-function': 'ease-in-out',
  });
};

PulsingDancer.prototype = Object.create(Dancer.prototype);
PulsingDancer.prototype.constructor = PulsingDancer;

PulsingDancer.prototype.step = (function() {
  // closure-scoped boolean flag:
  // true -> grow on the next step
  // false -> shrink on the next step
  var growOnNextStep = true;


  return function () {
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // debugger;
    // find a jQuery method that lets me grow/shrink the dancer
    if (growOnNextStep) {
      this.$node.css({
        'transform': 'scale(2)',
      });
    } else {
      this.$node.css({
        'transform': 'scale(1)',
      });
    }

    // toggle the grow/shrink flag
    growOnNextStep = !growOnNextStep;
  };

})();