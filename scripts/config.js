function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    backdropElement.style.display = 'block';
    configOverlayElement.style.display = 'block';
}

function closePlayerConfig(){
    backdropElement.style.display = 'none';
    configOverlayElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorMessage.textContent = "";
    inputPlayerName.value = "";
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const playername = formData.get('player-name').trim();

    if(!playername){
        event.target.firstElementChild.classList.add('error');
        errorMessage.textContent = "Please enter a valid name!";
        return;
    }
    
    const updatedPlayerName = document.getElementById("player" +editedPlayer);
    // console.dir(updatedPlayerName);
    updatedPlayerName.children[1].textContent = playername;

    player[editedPlayer - 1].name = playername;

    closePlayerConfig();
}