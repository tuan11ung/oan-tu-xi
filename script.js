let humanScore = 0;
let computerScore = 0;

const playerOption = document.querySelector('.option')
const hammerButton = document.querySelector('#hammer')
const leafButton = document.querySelector('#leaf')
const scissorsButotn = document.querySelector('#scissors')
const result = document.querySelector('#result')

const LEAF_OPTION = 'Leaf'
const HAMMER_OPTION = 'Hammer'
const SCISSORS_OPTION = 'Scissors'
const WINNING_POINT = 5

playerOption.addEventListener('click', (e) => {
  let target = e.target
  switch(target.id) {
    case 'leaf':
      playRound(LEAF_OPTION)
      break;
    case 'scissors':
      playRound(SCISSORS_OPTION)
      break;
    case 'hammer':
      playRound(HAMMER_OPTION)
      break;
  }
})

const checkWinner = (human, computer) => {
  
  const resultLog = document.createElement('p')
  if (humanScore == 5) {
    resultLog.textContent = `YOU ARE THE WINNER!!! ${humanChoice} beats ${computerChoice}, You ${humanScore} - ${computerScore} Com`
    result.appendChild(resultLog)
    humanScore = 0;
    computerScore = 0;
    const clearButton = document.createElement('button')
    clearButton.textContent = 'Clear'
    result.appendChild(clearButton)
    clearButton.addEventListener('click', () => {
      result.innerHTML = ''
    })
  }
}

function getRandomInt(num) {
  return Math.floor(Math.random() * num);
}

function getComputerChoice() {
  let computerChoice = getRandomInt(3)
  if (computerChoice == 0) {
    return SCISSORS_OPTION
  } else if (computerChoice == 1) {
    return HAMMER_OPTION
  } else return LEAF_OPTION
}

function getHumanChoice(option) {
  if (option == SCISSORS_OPTION) return SCISSORS_OPTION
  else if (option == HAMMER_OPTION) return HAMMER_OPTION
  else return LEAF_OPTION
}

function playRound(option) {
  let humanChoice = getHumanChoice(option)
  let computerChoice = getComputerChoice()

  const resultLog = document.createElement('p')

  if (humanChoice === computerChoice) {
    console.log(`DRAW, ${humanChoice} = ${computerChoice}, You ${humanScore} - ${computerScore} Com`)
    resultLog.textContent = `DRAW, ${humanChoice} = ${computerChoice}, You ${humanScore} - ${computerScore} Com`
    return result.appendChild(resultLog)
  }

  if (humanChoice == HAMMER_OPTION && computerChoice == SCISSORS_OPTION || humanChoice == SCISSORS_OPTION && computerChoice == LEAF_OPTION || humanChoice == LEAF_OPTION && computerChoice == HAMMER_OPTION) {
    humanScore++
    console.log(`WIN! ${humanChoice} beats ${computerChoice}, You ${humanScore} - ${computerScore} Com`)
    resultLog.textContent = `WIN! ${humanChoice} beats ${computerChoice}, You ${humanScore} - ${computerScore} Com`
    result.appendChild(resultLog)
    if (humanScore == WINNING_POINT) {
      resultLog.textContent = `YOU ARE THE WINNER!!! ${humanChoice} beats ${computerChoice}, You ${humanScore} - ${computerScore} Com`
      result.appendChild(resultLog)
      humanScore = 0;
      computerScore = 0;
      const clearButton = document.createElement('button')
      clearButton.textContent = 'Clear'
      result.appendChild(clearButton)
      clearButton.addEventListener('click', () => {
        result.innerHTML = ''
      })
    }
  }

  else {
    computerScore++
    console.log(`LOSE! ${computerChoice} beats ${humanChoice}, You ${humanScore} - ${computerScore} Com` )
    resultLog.textContent = `LOSE! ${computerChoice} beats ${humanChoice}, You ${humanScore} - ${computerScore} Com`
    result.appendChild(resultLog)
    if (computerScore == WINNING_POINT) {
      resultLog.textContent = `you are loser... ${humanChoice} beats ${computerChoice}, You ${humanScore} - ${computerScore} Com`
      result.appendChild(resultLog)
      humanScore = 0;
      computerScore = 0;
      const clearButton = document.createElement('button')
      clearButton.textContent = 'Clear'
      result.appendChild(clearButton)
      clearButton.addEventListener('click', () => {
        result.innerHTML = ''
      })
    }
  }


}







