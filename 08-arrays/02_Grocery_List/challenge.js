module.exports.addItem = function(newItem, candy){
  var index= candy.indexOf(newItem);
 if (index=== -1) {
   candy.push(newItem);
 }
 return candy;
};


module.exports.reverseSortedList = function(array){
  array.sort();
  array.reverse();
  return array;
};