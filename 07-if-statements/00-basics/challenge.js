module.exports.favoriteNumber = function(favorite,guess
if (guess > favorite) {
  return ("Sorry too high");
} 
else if (guess === favorite){
  return (That's correct);
}
else (guess < favorite) {
  return ("Sorry, too low");
}
};

module.exports.checkLock = undefined;

module.exports.canIGet = undefined;