let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()

function getComputerChoice() {
  let computerChoice = Math.random()
  if (computerChoice == 0) {
    return "Keo"
  } else if (computerChoice == 1) {
    return "Bua"
  } else return "Bao"
}

function getHumanChoice() {
  let sign = prompt("What's your choice?")
  sign.toLowerCase()
  if (sign == "keo") return "Keo"
  else if (sign == "bua") return "Bua"
  else return "Bao"
}

function playRound() {
  if (humanChoice === computerChoice) return console.log('Hoa')
  if (humanChoice == "Bua" && computerChoice == "Keo" || humanChoice == "Keo" && computerChoice == "Bao" || humanChoice == "Bao" && computerChoice == "Bua") {
    humanScore++
    return console.log(`Thang roi! ${humanChoice} thang ${computerChoice}`)
  }
  else {
    computerScore++
    return console.log(`Thua roi! ${computerChoice} thang ${humanChoice}` )
  }
}


function playGame() {
  while (humanScore < 5 || computerScore < 5) {
    playRound();
    console.log(`${humanScore} - ${computerScore}`)
  }
  if (humanScore == 5) {
    humanScore = 0;
    computerScore = 0;
    return console.log("Xin chuc mung ban da thang!!!")
  } 
  else {
    humanScore = 0;
    computerScore = 0;
    return console.log("Xin chia buon ban da thua!!!")
  } 
}
let endGame = 0;
// while (humanScore < 5 || computerScore < 5 || endGame == 10) {
//   playRound();
//   endGame++
// }
// playGame();

