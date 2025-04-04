const btn = document.querySelector(".btn");

function guessNumberGame() {
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let userGuess;
  let attempts = 0;

  // Continue asking until they guess correctly
  do {
    // Get user input with a prompt
    userGuess = prompt("Guess a number between 1 and 100:");

    // Convert to number
    userGuess = parseInt(userGuess);
    attempts++;

    // Check if guess is correct, too high, or too low
    if (isNaN(userGuess)) {
      alert("That's not a valid number. Try again!");
    } else if (userGuess === randomNumber) {
      alert(
        `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`
      );
    } else if (userGuess > randomNumber) {
      alert("Too high! Try again.");
    } else {
      alert("Too low! Try again.");
    }
  } while (userGuess !== randomNumber);
}

// Start the game
btn.addEventListener("click", guessNumberGame);
