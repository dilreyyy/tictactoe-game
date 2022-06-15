function startNewGame(){
    if(player[0].name === "" || player[1].name === ""){
        alert("Please input both names!");
        return;
    }

    activeGame = document.getElementById("active-game");
    activeGame.style.display = "block";
    activePlayerNameElement.textContent = player[activePlayer].name;


}

function switchPlayer(){   
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }

    activePlayerNameElement.textContent = player[activePlayer].name;

}

function selectedGameField(event){
    event.target.textContent = player[activePlayer].symbol;
    event.target.classList.add("disabled");

    switchPlayer();
}
