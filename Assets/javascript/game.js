var alphabet = ["l", "g", "b", "t", "q", "i", "a", "p", "n"];
 
var array = []

var guessleft = 9 ;

var win = 0;

var loss = 0;

var reset = function(){
    document.getElementById("win").textContent = win;

    document.getElementById("loss").textContent = loss;

    document.getElementById("guesssofar").textContent = array;

    document.getElementById("guessleft").textContent = guessleft;
}

var reset = function() {
    guessleft = 9;
    guesssofar = [];
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  };
  
  var displayResults = function() {
    document.getElementById('win').innerHTML = 'Wins: ' + win;
    document.getElementById('loss').innerHTML = 'Losses: ' + loss;
    document.getElementById('guessleft').innerHTML =
      'Guesses Left: ' + guessleft;
    document.getElementById('guesssofar').innerHTML =
      'Your guesses so far: ' + array;
  };
  
  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  
  document.onkeyup = function(event) {
    var userGuess = event.key;
    array.push(userGuess);
   
  
    console.log(computerGuess);
  
    if (userGuess === computerGuess) {
      win++;
      reset();
      console.log('Way to go!');
    } else {
      guessleft--;
    }
  
    if (guessleft <= 0) {
      loss++;
      reset();
      console.log('You Lost!');
    }
    displayResults();


    };

   
