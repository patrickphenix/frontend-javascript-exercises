module.exports.reversePlusOne = function(letters){
  letters.reverse();
   letters.unshift(1);
   return letters;
};

module.exports.plusesEverywhere = function(a){
  return a.join('+');
};

module.exports.arrayQuantityPlusOne = function(plusOne){
  return plusOne.length + 1;
};