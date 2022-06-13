function openPlayerConfig(){
    backdropElement.style.display = 'block';
    configOverlayElement.style.display = 'block';
}

function closePlayerConfig(){
    backdropElement.style.display = 'none';
    configOverlayElement.style.display = 'none';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const playername = formData.get('player-name');
    console.log(playername);
}