module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne == stringTwo;

};

module.exports.notEqual = function(one, two) {
  return one !== two;

};

module.exports.inBetween = function(lower, middle, upper) {
  var smallerThanMiddle = lower < middle;
  var middleIsSmaller = middle <upper;
  return smallerThanMiddle && middleIsSmaller;

};

module.exports.outsideRanges = function(number) {
  // 1: verify first condition
  var one =number < 10  || number > 20;

  // 2: verify second condition
  var two = number <= 42 || number > 75;
  // 3: verify 3rd condition
  var three = number <=1 || number >= 6;

  return one && two && three;

};

module.exports.nameAndPrice = function(name, price) {
  var greaterThan= price >= 1;
  var newspaper= name =="NYTimes" ||name == "LATimes";
  return newspaper && greaterThan;

};