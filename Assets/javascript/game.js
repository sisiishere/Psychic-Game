// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["l", "g", "b", "t", "q", "i", "a", "p", "n"];

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

var x = 1;  {
    x = 2;
    x = 3;
    x = 4;
    x = 5;
    x = 6;
    x = 7;
    x = 8;
    x = 9;
    x = 10;
    x = 11;
    x = 12;
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];





    // Alerts the key the user pressed (userGuess).
    console.log("User guess: " + userGuess);

    // Alerts the Computer's guess.
    console.log("Computer guess: " + computerGuess);

    // document.getElementById("user-choice").innerHTML = event.key;

    // document.getElementById("computer-choice").innerHTML = computerGuess;

    // if the user and comp make the same choice, the user wins a point in win; if the letter is guessed, the letter will show.
    if (userGuess === computerGuess) {
    win++;
    document.getElementById("win").textContent = "Wins: " + win;
    array.push(event.key);
    document.getElementById("guesssofar").textContent =  "Your Guesses So Far: " + array; 
    document.getElementById("guesssofar").textContent = "Guesses Left: 0" + guessleft - 9;
    var clearButton = document.createElement("BUTTON");
    var text = document.createTextNode("Clear Selection");
    clearButton.onclick = function () {
        guessleft = 9;
    console.log("Guesses Left: 9")
   
    }
    }

    // if user makes a different choice from the comp, user loses a point in guesses left; if the letter is guessed, the letter will show.
    else if (userGuess !== computerGuess) {
    guessleft--;
    document.getElementById("guessleft").textContent = "Guesses Left: " + guessleft;
    array.push(event.key);
    document.getElementById("guesssofar").textContent =  "Your Guesses So Far: " + array; 
    

    }

    // if user makes a different choice from the comp on the ninth try, user gains a point in loss; if the letter is guessed, the letter will show.
      if (guessleft === 0) {
    loss++;
    document.getElementById("loss").textContent = "Losses: " + loss;
    array.push(event.key);
    guessleft = 0;
    document.getElementById("guesssofar").textContent =  "Your Guesses So Far: " + array; 
    document.getElementById("guesssofar").textContent = "Guesses Left: 0" + guessleft - 9;
    var clearButton = document.createElement("BUTTON");
    var text = document.createTextNode("Clear Selection");
    clearButton.onclick = function () {
        guessleft = 9;
    console.log("Guesses Left: 9");

    }
    }

    //if user wins, then the guesses left will reset to nine.
        if (userGuess === computerGuess && win++) {
         guessleft = 9;
        document.getElementById("guessleft").textContent = "Guesses Left: 9 " 
        array = [];
        document.getElementById("guesssofar").textContent = "Your Guesses So Far:  "
        array.push(event.key);
        
    
    }

    //if user loses, then the guesses left will reset to nine.
        else if (guessleft === 0 && loss++) {
         guessleft = 9;
        document.getElementById("guessleft").textContent = "Guesses Left: 9 "
        array = [];
        document.getElementById("guesssofar").textContent = "Your Guesses So Far:  "
        array.push(event.key);  
      
    
    }


    


};
