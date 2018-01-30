var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};
MemoryGame.prototype.shuffleCard = function (array){
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
}

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard){
if (firstCard=== secondCard){true}else{false}
}

MemoryGame.prototype.finished = function(){if (pairsGuessed=pickedCards.length/2){
  console.log("Congrats you Won!")} else {}
}


