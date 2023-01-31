let pScore = 0;
let cScore = 0;

function playRound ( playerSelection, computerSelection ) {

    function getComputerChoice () {
        let a = ["rock", "paper", "scissors"]
        return  a[Math.floor(Math.random() * 3)]  
    } getComputerChoice()
    
    playerSelection = prompt("chose your weapon").toLocaleLowerCase()
    computerSelection = getComputerChoice()

    // if ( playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors" ) return `uk` 
    if ( computerSelection === playerSelection ) return `Its A Tie, You Both Chosen ${computerSelection}` 
    if ( computerSelection === "rock" && playerSelection === "paper" ) {
        pScore+= 1
        return `You Win! ${playerSelection} beats ${computerSelection}`}
    if (  computerSelection === "paper" && playerSelection === "scissors") {
        pScore+=1
    return `You Win! ${playerSelection} beats ${computerSelection}`}
    else {
        cScore+=1
        return `You Lose! ${computerSelection} beats ${playerSelection}`}
} playRound()


function game() {
    
    while (pScore<5 && cScore<5) {
        console.log(playRound())
        console.log(`Your Score Is :${pScore}`)
        console.log(`Computer's Score Is :${cScore}`)
    }
    if ( pScore === 5) console.log(`You WIN! ${pScore} - ${cScore}`)
    else if ( cScore === 5 ) console.log(`You LOSE! ${cScore} - ${pScore}`)
} game()