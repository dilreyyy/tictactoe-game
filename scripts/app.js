const backdropElement = document.getElementById('backdrop');
const configOverlayElement = document.getElementById('config-overlay');
const formElement = document.querySelector('form');
const errorMessage = document.getElementById('error-message');
const activePlayerNameElement = document.getElementById("active-player-name");

const gameField = [
    [0, 0, 0,],
    [0, 0, 0,],
    [0, 0, 0,]
];

const player = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

let activePlayer = 0;
let editedPlayer = 0;
let currentRound = 1;
let winnerFound = false;


const inputPlayerName = document.getElementById('player-name');
const btnEditPlayerOneElement = document.getElementById('btn-edit-playerone');
const btnEditPlayerTwoElement = document.getElementById('btn-edit-playertwo');
const btnCancelConfigElement = document.getElementById('btn-cancel-config');
const btnStartNewGameElement = document.getElementById('btn-startnewgame');
const gameFieldsElements = document.querySelectorAll("#game-board li");
const endGameMessage = document.querySelector("#active-game article");

btnEditPlayerOneElement.addEventListener('click', openPlayerConfig);
btnEditPlayerTwoElement.addEventListener('click', openPlayerConfig);

btnCancelConfigElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit' ,savePlayerConfig);
btnStartNewGameElement.addEventListener('click', startNewGame);

for (const gameFieldsElement of gameFieldsElements){
    gameFieldsElement.addEventListener("click", selectedGameField);
}