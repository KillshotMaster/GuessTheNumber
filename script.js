const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const result = document.getElementById("result");
    attempts++;

    if (isNaN(userGuess)) {
        result.textContent = "Please enter a valid number!";
    } else if (userGuess < randomNumber) {
        result.textContent = `Too low! Try again. (Attempt ${attempts})`;
    } else if (userGuess > randomNumber) {
        result.textContent = `Too high! Try again. (Attempt ${attempts})`;
    } else {
        result.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    }
    document.getElementById("guessInput").value = "";
}

function resetGame(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    document.getElementById("guessInput").value = "";
    document.getElementById("result").textContent = "";
}