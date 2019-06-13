var guessleft = 0 ;

var guesssofar = 0 ;

var win = 0;

var loss = 0;


// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["l", "g", "b", "t", "q", "i", "a", "p", "n"];

var guessleft = 0 ;

var guesssofar = 0 ;

var win = 0;

var loss = 0;


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];





    // Alerts the key the user pressed (userGuess).
    alert("User guess: " + userGuess);

    // Alerts the Computer's guess.
    alert("Computer guess: " + computerGuess);

    document.getElementById("user-choice").innerHTML = event.key;

    document.getElementById("computer-choice").innerHTML = computerGuess;

    // if the user and comp make the same choice, the user wins a point in win.
    if (userGuess === computerGuess) {
    document.getElementById("result").innerHTML = "Yasss!";
    win = win + 1

    }
    // if user makes a different choice from the comp, user loses a point in guesses left
    else if (userGuess !== computerGuess) {
    document.getElementById("result").innerHTML = "Try Again!";
    guessleft = guessleft - 1;
    }

    // if user makes a different choice from the comp on the ninth try, user gains a poin in loss
    else {
    document.getElementById("result").innerHTML = "Better Luck Next Time!";
    loss = loss + 1;
    }

    document.getElementById("win").innerHTML = win;

    document.getElementById("loss").innerHTML = loss;

    document.getElementById("guesssofar").innerHTML = guesssofar;

    document.getElementById("guessleft").innerHTML = guessleft;

};
