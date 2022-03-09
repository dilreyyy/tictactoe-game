const btnCancelConfigElement = document.getElementById('btn-cancel-config');
const btnSubmitConfigElement = document.querySelector('form button.btn-action');

const backdropElement = document.getElementById('backdrop');
const configOverlayElement = document.getElementById('config-overlay');

const btnEditPlayerOneElement = document.getElementById('btn-edit-playerone');
const btnEditPlayerTwoElement = document.getElementById('btn-edit-playertwo');

btnEditPlayerOneElement.addEventListener('click', openPlayerConfig);
btnEditPlayerTwoElement.addEventListener('click', openPlayerConfig);

btnCancelConfigElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
btnSubmitConfigElement.addEventListener('submit', savePlayerConfig);