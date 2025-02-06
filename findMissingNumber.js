function getRandomNumber(from, to) {
  return from + Math.floor(Math.random() * (to - from));
}

//+, -, *, /, %,

function operationsMap(value, operator, reference) {
  const operations = ["add", "sub", "mul", "div", "mod"];

  const results = {
    add: () => value + reference,
    sub: () => value - reference,
    mul: () => value * reference,
    div: () => +(value / reference).toFixed(1),
    mod: () => +(value % reference).toFixed(1),
  };

  return results[operations[operator]];
}

const generateNumSequence = () => {
  const operator = getRandomNumber(0, 4);
  const value = getRandomNumber(1, 50);

  const array = [value];

  for (let index = 0; index < 5; index++) {
    array[index] = operationsMap(array.at(-1), operator, value)();
  }

  return array;
};

const printPatternAndGetLastElement = () => {
  const numberPattern = generateNumSequence();
  const patternExceptLastElement = numberPattern.slice(
    0,
    numberPattern.length - 1
  );
  patternExceptLastElement.push("_");

  console.log(patternExceptLastElement.join(" ,"));
  return numberPattern.at(-1);
};

const displayMessage = (userGuess, targetValue) => {
  if (userGuess === targetValue) {
    return "\nBravo! You've nailed it. The number was " + targetValue;
  }

  return "\nBetter luck next time! the number was " + targetValue;
};

const input = () => {
  const targetValue = printPatternAndGetLastElement();
  const userGuess = +prompt("\ncalculate and enter the last number");

  return displayMessage(userGuess, targetValue);
};

console.log(input());
