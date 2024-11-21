function getNumber() {
  const secretNumber = Math.ceil(Math.random() * 100);
  return secretNumber;
}

function printMessage() {
  console.log("Welcome to Guess the Number!");
  console.log("The secret number is between 1 and 100. You have 5 attempts to" +
    " find it.");
}

printMessage();
const numberToFind = getNumber();

function guessTheNumber(attempt, numberToFind) {
  console.log(numberToFind);
  if (attempt === 0) {
    return "Oh no! You've used all your attempts. Better luck next time!";
  }

  let guessedNumber = +prompt("Take a guess! (Remaining attempts: " +
    attempt + ")");

  if (!(guessedNumber > 0) || guessedNumber > 100) {
    attempt = attempt + 1;
    console.log("Invalid input! Please enter a number.");
  }

  if (guessedNumber === numberToFind) {
    return "Bravo! You've nailed it. The number was " + numberToFind + "!";
  }

  if (guessedNumber < numberToFind) {
    console.log(guessedNumber + " Too low! Try a higher number.");
  }

  if (guessedNumber > numberToFind) {
    console.log(guessedNumber + " Too high! Try a smaller number.");
  }

  return guessTheNumber(attempt - 1, numberToFind);
}

console.log(guessTheNumber(5, numberToFind));

function repeat() {
  let wantToPlay = confirm("Do you want to play again");

  if (wantToPlay) {
    getNumber();
    printMessage();
    const numberToFind = getNumber();
    console.log(guessTheNumber(5, numberToFind));
    repeat();
  }

  return wantToPlay ? repeat() : "Good Bye";
}
console.log(repeat());
