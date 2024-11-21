console.log("\n\t\t\t------------------Welcome To Play Book" +
  " Cricket-----------------------\n");
let HighScore = 0;

function getLine() {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
}

function getTargetMessage(batsman, target) {
  console.log("                                       It's", batsman, "turn to play    your target is :-", target + 1);
}

function details(playerNumber) {

  return prompt("Enter Player " + playerNumber + " Name:", "player" + playerNumber);
}

let Player1Name = details(1);
let Player2Name = details(2);

function displayVs() {
  console.log("\n", Player1Name + "    " + "-----🆚-----" + "    " + Player2Name + "\n");
}

displayVs();

function wait() {
  const number = Math.ceil(Math.random() * 1000);
  for (let iteration = 0; iteration < number * 1000000; iteration++) {
  }
}

function tails() {
  const tails = "\t\t\t\t\t┃🪙🪙🪙🪙🪙🪙🪙🪙🪙┃";
  const top = "\t\t\t\t\t┏━━━━━━━━━━━━━━━━━━┓";
  const mid = "\t\t\t\t\t┃\t 🪙\t   ┃"
  const bottom = "\t\t\t\t\t┗━━━━━━━━━━━━━━━━━━┛";
  const symbol = top + "\n" + tails + "\n" + mid + "\n" + mid + "\n" + mid
    + "\n" + mid + "\n" + mid + "\n" + mid + "\n" + mid + "\n" + mid + "\n" + bottom;

  console.log(symbol);
}

function head() {
  const top = "\t\t\t\t\t\t\t        ┏━━━━━━━━━━━━━━━━━━┓";
  const mid = "\t\t\t\t\t\t\t        ┃🪙\t      \t 🪙┃"
  const horizontalLine = "\t\t\t\t\t\t\t        ┃🪙🪙🪙🪙🪙🪙🪙🪙🪙┃"
  const bottom = "\t\t\t\t\t\t\t        ┗━━━━━━━━━━━━━━━━━━┛";
  const headSymble = top + "\n" + mid + "\n" + mid + "\n" + mid + "\n" + mid + "\n" + horizontalLine + "\n" + mid + "\n" + mid + "\n" + mid + "\n" +
    mid + "\n" + bottom;

  console.log(headSymble);
}


function getHeadOrTail(noOfTimes) {
  console.clear();
  if (noOfTimes === 0) {
    const isHeads = Math.round(Math.random()) % 2 === 0;

    if (isHeads) {
      head();
    } else {
      tails();
    }

    return isHeads;
  }

  head();
  wait();
  console.clear();

  tails();
  wait();

  return getHeadOrTail(noOfTimes - 1);
}

function whoWonToss() {
  console.log(" 1.Heads\n 2.Tails")
  const headOrTail = +prompt("\nplayer1 decides Heads Or Tails");
  if (headOrTail === 2 || headOrTail === 1) {
    const toss = getHeadOrTail(10);
    if (headOrTail === 1) {
      if (toss) {
        return Player1Name;
      }
    }

    if (headOrTail === 2) {
      if (!toss) {
        return Player1Name;
      }
    }

    return Player2Name;
  }
  console.log("\nenter valid Input");
  return whoWonToss();
}

function decisionOfPlayfirst() {
  console.log(" 1.Bating🏏\n 2.Bowling⚾️");
  let ballOrBat = +prompt("Choose 1 To Bat Or 2 To Bowl");
  if (ballOrBat === 1 || ballOrBat === 2) {
    return ballOrBat;
  }
  console.log("\nenter valid input");
  return decisionOfPlayfirst();
}

function whomToPlay(playerName) {
  console.log("\n" + playerName + " You Have To Bat 🏏 ");
  prompt("\npress enter to play game");
}

let score = 0;

function game(balls, playerName, player1Score) {
  if (score > player1Score) {
    return score;
  }

  prompt(playerName + " press enter to get " + "⚾️ Ball" + " " + balls + " "
    + "score\n");

  let ballScore = Math.ceil(Math.random() * 10);

  switch (ballScore) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 6:
      console.log("your ball " + balls + " score :" + ballScore);
      score = score + ballScore;
      break;

    case 5:
      console.log("-----Wide Ball------");
      console.log("1 run will be added");
      score = score + 1;
      balls -= 1;
      break;

    case 7:
      console.log("-----No Ball------");
      console.log("1 run will be added");
      score = score + 1;
      balls -= 1;
      break;

    case 8:
      console.log("-----LBW------");
      console.log("your score is :", +score);
      return score;

    case 9:
      console.log("OUT")
      console.log("Your Score Is :", +score);
      return score;

    case 10:
      console.log("Catch Out");
      console.log("Your Score Is :", +score);
      return score;

  }
  return game(balls + 1, playerName, player1Score);
}

function repeat() {
  let player1Score = 0;
  let player2Score = 0;
  let tossWinner = whoWonToss();
  console.log(tossWinner + " You Won The Toss\n");
  let choosing = decisionOfPlayfirst();
  let batsman = tossWinner;

  if (choosing === 2 && tossWinner === Player2Name) {
    batsman = Player1Name;
  }

  if (choosing === 2 && tossWinner === Player1Name) {
    batsman = Player2Name;
    Player2Name = Player1Name;
    Player1Name = batsman;
  }

  player1Score = game(1, batsman);

  const target = score;

  score = 0;

  if (batsman === Player1Name) {
    batsman = Player2Name;
  } else {
    batsman = Player1Name;
  }

  getLine();
  getTargetMessage(batsman, target);
  getLine();

  whomToPlay(batsman);
  player2Score = game(1, batsman, player1Score);

  if (player1Score > player2Score) {
    console.log("\n\t\t\t\t\t   Congrats " + Player1Name + " Won The Match");

    console.log("\t\t\t\t\t   " + Player1Name + " score : " + player1Score, Player2Name + " score : " +
      player2Score);
  }
  else if (player1Score === player2Score) {
    console.log("********tDRAW********");
  }
  else {
    console.log("\t\t\t\t\t   " + Player1Name + "score : " + player1Score, Player2Name + "score : " +
      player2Score);

    console.log("\n\t\t\t\t\t   Congrats " + Player2Name + " Won The Match");
  }

  score = 0;

  console.log("-------------------------------------------------------------------------------------------------------------------------------");

  if (confirm("\nWant To Play Again")) {
    console.clear();
    displayVs();
    repeat();
  }

  return "  Thank you for playing \n Good Bye👋";
}

console.log(repeat());
