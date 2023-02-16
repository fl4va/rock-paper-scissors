let playerSelection;
let computerSelection;
let pScore = 0;
let cScore = 0;

const btn = document.querySelectorAll('.option')
btn.forEach((option) => {   
    option.addEventListener('click', () => {
        playerSelection = option.textContent.toLocaleLowerCase()
        game()
        if (pScore === 5 || cScore === 5 ) {
            endGame()
        }
    })
})

function getComputerChoice () {
    let a = ["rock", "paper", "scissors"]
    return  a[Math.floor(Math.random() * 3)]  
} 

function playRound ( playerSelection, computerSelection) {

    computerSelection = getComputerChoice()

    if ( computerSelection === playerSelection ) return `Its A Tie, You Both Chosen ${computerSelection}` 
    else if ( computerSelection === "rock" && playerSelection === "paper" ) {
        pScore+= 1
        return `You Win! ${playerSelection} beats ${computerSelection}`}
    else if (  computerSelection === "paper" && playerSelection === "scissors") {
        pScore+=1
    return `You Win! ${playerSelection} beats ${computerSelection}`}
    else {
        cScore+=1
        return `You Lose! ${computerSelection} beats ${playerSelection}`}
        
} 

function game() {
    let thisRound = document.querySelector('.thisRound')
    let pSco = document.querySelector('.pScore')
    let cSco = document.querySelector('.cScore')

    thisRound.textContent = playRound(playerSelection, computerSelection)
    pSco.textContent = `Me: ${pScore}`
    cSco.textContent = `Computer: ${cScore}`
    
    document.body.appendChild(thisRound)
    document.body.appendChild(pSco)
    document.body.appendChild(cSco)
} 

function endGame () {

    let iWin = document.querySelector('.final')
    let cWin = document.querySelector('.final')

    if ( pScore === 5) {
        iWin.textContent = `Yeey! You DID It ${pScore} - ${cScore}`
        document.body.appendChild(iWin)
    }
    else if ( cScore === 5 ) {
        cWin.textContent = `OH NO! You Lost ${cScore} - ${pScore}`
        document.body.appendChild(cWin)
    }
    pScore = 0;
    cScore = 0;
}