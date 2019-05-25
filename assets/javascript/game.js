
        // Create an array that lists all options (the letters of the aplhabet)
        var alphabet = ["a", "b", "c", "d", "e", "f", "j", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        console.log(alphabet);

        // create variables
        var userGuessText = document.getElementById("userGuesses");

        // var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];    


        var wins = 0;
        var losses = 0;
        var counter = 9;
        var letters = ""

        var winsText = document.getElementById("winsCounter");
        var lossesText = document.getElementById("lossesCounter");
        var counterText = document.getElementById("numberGuessesLeft");
        var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
        
        // Whenever the user presses a key on the keyboard
        // The user's choice populates on the screen in the "Your Guesses so far" line
        // Computer randomly picks a letter from the alphabet when the user presses a letter on the keyboard
        document.onkeyup = function (event) {
            var userPick = event.key;
            
            // Adds the user guesses 
            letters = letters + event.key
            userGuessText.textContent = letters;
           


            
            console.log(computerPick)
        

            // When the user runs out of choices, end game!


            // Set up the conditions/rules of the game
            // If the user picks the letter that matches what the computer randomly selected, the user wins and wins score goes up by 1 
            if (userPick == computerPick) {
                wins = wins + 1;
                winsText.textContent = wins;
                computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
                letters = "";
                counter = 9;
                alert ("You won!");

                // Otherwise, increase losses by 1 and decrease counter by 1
            } else {
                counter = counter - 1;
                counterText.textContent = counter;
            }
            if (counter === 0) {
                counter = 9;
                losses = losses + 1;
                lossesText.textContent = losses;
                computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
                letters = "";
                alert ("You lost!");
                // game over
                //display "game over" message
                // reset counter to 0


            }
        }






            // Log the results
            console.log(wins, losses, counter);
            winsText.textContent = wins;
            lossesText.textContent = losses;
        //  counterText.textContent = counter;


        // 
