const backdropElement = document.getElementById('backdrop');
const configOverlayElement = document.getElementById('config-overlay');
const formElement = document.querySelector('form');
const errorMessage = document.getElementById('error-message');
let editedpPlayer = 0;
// let inputPlayerName = document.getElementById('player-name');


const btnEditPlayerOneElement = document.getElementById('btn-edit-playerone');
const btnEditPlayerTwoElement = document.getElementById('btn-edit-playertwo');
const btnCancelConfigElement = document.getElementById('btn-cancel-config');

btnEditPlayerOneElement.addEventListener('click', openPlayerConfig);
btnEditPlayerTwoElement.addEventListener('click', openPlayerConfig);

btnCancelConfigElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit' ,savePlayerConfig);