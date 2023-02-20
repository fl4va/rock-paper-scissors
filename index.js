let playerSelection;
let computerSelection;
let pScore = 0;
let cScore = 0;


const btn = document.querySelectorAll('.option');
btn.forEach((option) => {   
    option.addEventListener('click', () => {
        const img = option.querySelector('img');
        playerSelection = img.alt.toLowerCase();
        game();
        if (pScore === 5 || cScore === 5 ) {
            endGame();
            resetGame();
            disableButtons();
        };
    });
});

function getComputerChoice () {
    let a = ["rock", "paper", "scissors"];
    return  a[Math.floor(Math.random() * 3)];  
}; 

function playRound ( playerSelection, computerSelection) {

    computerSelection = getComputerChoice();

    if ( computerSelection === playerSelection ) {return `Its A Tie! You Both Chose ${computerSelection}`} 
    else if ((computerSelection === "rock" && playerSelection === "paper" ) ||
            (computerSelection === "paper" && playerSelection === "scissors") ||(computerSelection === 'scissors' && playerSelection === 'rock')) {
             pScore+=1
             return `You Win! ${playerSelection} beats ${computerSelection}` }
    else {
            cScore+=1;
            return `You Lose! ${computerSelection} beats ${playerSelection}`};
}; 

function game() {
    let thisRound = document.querySelector('.thisRound');
    let pSco = document.querySelector('.pScore');
    let cSco = document.querySelector('.cScore');

    thisRound.textContent = playRound(playerSelection, computerSelection);
    pSco.textContent = `Me: ${pScore}`;
    cSco.textContent = `Computer: ${cScore}`;

    document.body.appendChild(thisRound);
    document.body.appendChild(pSco);
    document.body.appendChild(cSco);
}; 

function endGame () {

    let final = document.querySelector('.final');

    if ( pScore === 5) {
        final.textContent = `Yeey! YOU DID IT ${pScore} - ${cScore}`
    }
    else if ( cScore === 5 ) {
        final.textContent = `OH NO! YOU Lost ${cScore} - ${pScore}`
    }
    document.body.appendChild(final)
};

function resetGame () {
    const newGame = document.createElement('button');
    newGame.textContent = 'Play Again';
    document.body.appendChild(newGame);
    newGame.style.cssText = 'position: absolute; left: 50%; transform: translateX(-50%); margin: 10px; padding: 5px; font-weight: bold; font-size: 20px;border: 1px solid black; border-radius: 5px;'

    newGame.onclick = () => {
        document.location.reload()
    };
};

function disableButtons () {
    btn.forEach((option) => {
        option.disabled = true
    });
};