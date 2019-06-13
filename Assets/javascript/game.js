var guess = ["Wins", "Losses", "Guesssofar", "Guessleft"];
guess.guesssofar();              // Inserts a letter clicked in ("Guesssofar") if guess a letter

var guess = ["Wins", "Losses", "Guesssofar", "Guessleft"];
guess.losses();              // Adds 1 in ("Losses") if guess is wrong for the ninth time

var guess = ["Wins", "Losses", "Guesssofar", "Guessleft"];
guess.wins();              // Adds 1 in ("Win") if guess is right

var guess = ["Wins", "Losses", "Guesssofar", "Guessleft"];
guess.guessleft();              // Subtracts 1 from ("Guessleft") if guess is wrong