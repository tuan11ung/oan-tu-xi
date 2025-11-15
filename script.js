let humanScore = 0;
let computerScore = 0;

function getRandomInt(num) {
  return Math.floor(Math.random() * num);
}

function getComputerChoice() {
  let computerChoice = getRandomInt(3)
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
  let humanChoice = getHumanChoice()
  let computerChoice = getComputerChoice()
  if (humanChoice === computerChoice) return console.log(`Hoa, ${humanScore} - ${computerScore}`)
  if (humanChoice == "Bua" && computerChoice == "Keo" || humanChoice == "Keo" && computerChoice == "Bao" || humanChoice == "Bao" && computerChoice == "Bua") {
    humanScore++
    return console.log(`Thang roi! ${humanChoice} thang ${computerChoice}, ${humanScore} - ${computerScore}`)
  }
  else {
    computerScore++
    return console.log(`Thua roi! ${computerChoice} thang ${humanChoice}, ${humanScore} - ${computerScore}` )
  }
}

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    playRound();
    console.log(`${humanScore} - ${computerScore}`)
  }
  if (humanScore == 5) {
    humanScore = 0;
    computerScore = 0;
    console.log("Xin chuc mung ban da thang!!!")
    playGame()
  } 
  else {
    humanScore = 0;
    computerScore = 0;
    console.log("Xin chia buon ban da thua!!!")
    playGame()
  } 
}

playGame()




