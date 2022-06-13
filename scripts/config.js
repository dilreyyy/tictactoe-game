function openPlayerConfig(){
    backdropElement.style.display = 'block';
    configOverlayElement.style.display = 'block';
}

function closePlayerConfig(){
    backdropElement.style.display = 'none';
    configOverlayElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorMessage.textContent = "";
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

}