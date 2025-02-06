function top() {
  const topGrid = "┏━━━━┳━━━━┳━━━━┳━━━━┳━━━━┓";
  return topGrid;
}

function middle() {
  const middleGrid = "┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫";
  return middleGrid;
}

function bottom() {
  const bottomGrid = "┗━━━━┻━━━━┻━━━━┻━━━━┻━━━━┛";
  return bottomGrid;
}

function getRandomNumber(from, to) {
  return from + Math.floor(Math.random() * (to - from));
}

function wait() {
  const number = Math.ceil(Math.random() * 3000);
  for (let iteration = 0; iteration < number * 1000000; iteration++) {}
}

function welcomeMessage() {
  // console.log("\n\t\t\t\t\t    ", "---- Welcome to Play ⚡️Bingo⚡️ -----");
  let string = `

▗▖ ▗▖▗▄▄▄▖▗▖    ▗▄▄▖ ▗▄▖ ▗▖  ▗▖▗▄▄▄▖    ▗▄▄▄▖▗▄▖     ▗▄▄▖ ▗▖    ▗▄▖▗▖  ▗▖    ▗▄▄▖ ▗▄▄▄▖▗▖  ▗▖ ▗▄▄▖ ▗▄▖ 
▐▌ ▐▌▐▌   ▐▌   ▐▌   ▐▌ ▐▌▐▛▚▞▜▌▐▌         █ ▐▌ ▐▌    ▐▌ ▐▌▐▌   ▐▌ ▐▌▝▚▞▘     ▐▌ ▐▌  █  ▐▛▚▖▐▌▐▌   ▐▌ ▐▌
▐▌ ▐▌▐▛▀▀▘▐▌   ▐▌   ▐▌ ▐▌▐▌  ▐▌▐▛▀▀▘      █ ▐▌ ▐▌    ▐▛▀▘ ▐▌   ▐▛▀▜▌ ▐▌      ▐▛▀▚▖  █  ▐▌ ▝▜▌▐▌▝▜▌▐▌ ▐▌
▐▙█▟▌▐▙▄▄▖▐▙▄▄▖▝▚▄▄▖▝▚▄▞▘▐▌  ▐▌▐▙▄▄▖      █ ▝▚▄▞▘    ▐▌   ▐▙▄▄▖▐▌ ▐▌ ▐▌      ▐▙▄▞▘▗▄█▄▖▐▌  ▐▌▝▚▄▞▘▝▚▄▞▘

`;
  console.log(string);
}

welcomeMessage();

const Player1Name = prompt("Enter Player One Name:", "Player1");
const Player2Name = prompt("Enter Player Two Name:", "Player2");

function displayVs() {
  return (
    "", Player1Name + "    " + "-----🆚-----" + "    " + Player2Name + "\n"
  );
}

console.log("\n\t\t\t\t\t    ", displayVs());

function whoWon(name) {
  return (
    "\t\t\t\t\t🏆Bingo--------🥇 " + name + " 🥇--------Won🏆 The Match 🏆\n"
  );
}

function getString() {}

function add(elements) {
  let string = "";
  if (elements === 0) {
    return string;
  }
  for (let i = 0; i < 5; i++) {
    const randomNumber = getRandomNumber(1, 25);

    if (randomNumber <= 9) {
      string += " ";
    }

    string = string + randomNumber + "  ┃";
  }

  if (elements === 5) {
    return "┃" + string + "\n" + add(elements - 5, string);
  }

  return "┃" + string + "\n" + middle() + "\n" + add(elements - 5, string);
}

let table1 = top() + "\n" + add(25) + bottom();
let table2 = top() + "\n" + add(25) + bottom();

let index1 = -1;
let index2 = -1;

function getSlice(grid, currentIndex) {
  let slicedString = "";

  for (let index = currentIndex; index < grid.length; index++) {
    if (grid[index] === "\n") {
      index1 = index;
      return slicedString;
    }

    slicedString += grid[index];
    index1 += index;
  }

  return slicedString;
}

function merge(table1, table2) {
  if (index1 > table1.length) {
    return "";
  }

  console.log(
    "\t\t\t\t" +
      getSlice(table1, index1 + 1) +
      "\t  " +
      getSlice(table2, index2 + 1)
  );
  index2 = index1;

  return merge(table1, table2);
}

let player1Score = 0;
let player2Score = 0;

function replace(boxToChange, match, replacement) {
  let string = "";

  for (let textIndex = 0; textIndex < boxToChange.length; textIndex++) {
    let character = boxToChange[textIndex];
    let charToReplace = boxToChange[textIndex] + boxToChange[textIndex + 1];

    if (+match < 10) {
      if (boxToChange[textIndex - 1] == " ") {
        charToReplace = boxToChange[textIndex];
      }
    }

    if (charToReplace === match) {
      if (boxToChange === table1) {
        player1Score += 1;
      }

      if (boxToChange === table2) {
        player2Score += 1;
      }

      character = replacement;
      textIndex += 1;
    }

    string = string + character;
  }

  return string;
}

function getReplacedString(boxToChange, input) {
  return replace(boxToChange, input, "🌟");
}

console.log(merge(table1, table2));

function printTable(playerName, table) {
  console.log(table);

  const input = prompt(playerName + " Enter Your Number");
  if (table === table1) {
    table = getReplacedString(table, input);
    table1 = table;
    table2 = getReplacedString(table2, input);
  } else {
    table = getReplacedString(table, input);
    table2 = table;
    table1 = getReplacedString(table1, input);
  }

  console.log(table);

  prompt("Press Enter To Clear");
  console.clear();
  console.log("Give To Your Opponent");
  wait();
  console.clear();
}

function update(Player1Name, Player2Name) {
  if (player1Score === 25 || player2Score === 25) {
    if (player1Score === 25) {
      console.log(merge(table1, table2));
      return whoWon(Player1Name);
    }
    console.log(merge(table1, table2));
    return whoWon(Player2Name);
  }

  console.log("\n\t\t\t\t\t    ", displayVs());
  printTable(Player1Name, table1);
  wait();
  printTable(Player2Name, table2);

  index1 = -1;
  index2 = -1;

  return update(Player1Name, Player2Name);
}

console.log(update(Player1Name, Player2Name));
