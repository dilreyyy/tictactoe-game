function resetGame(){
    activePlayer = 0;
    editedPlayer = 0;
    currentRound = 1;
    winnerFound = false;
    let indexFields = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            gameField[i][j] = 0;
            gameFieldsElements[indexFields].classList.remove("disabled");
            gameFieldsElements[indexFields].textContent = '';
            indexFields++;
        }
    }

    endGameMessage.style.display = "none";
    endGameMessage.firstElementChild.innerHTML = "You won, <span>PLAYER NAME</span>!"; 
    
}
function startNewGame(){
    if(player[0].name === "" || player[1].name === ""){
        alert("Please input both names!");
        return;
    }

    resetGame();

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
    if(winnerFound){
        return;
    }

    const selectedElement = event.target;
    const selectedRow = selectedElement.dataset.row - 1;
    const selectedCol = selectedElement.dataset.col - 1;

    if(gameField[selectedRow][selectedCol] > 0){
        alert("Select and empty field");
        return; //exit function
    }

    selectedElement.textContent = player[activePlayer].symbol;
    selectedElement.classList.add("disabled");
    gameField[selectedRow][selectedCol] = activePlayer + 1;
    // console.log(gameField);
    const winnerID = gameOver();
    console.log(winnerID);

    endGame(winnerID);
    switchPlayer();
    currentRound++;

}

function gameOver(){
    for(let i = 0; i < 3; i++){
        //check winner by rows
        if(gameField[i][0] > 0 && 
            gameField[i][0] == gameField[i][1] && 
            gameField[i][1] == gameField[i][2]
        ){
            // console.log(gameField[i][0]);
            return gameField[i][0];
        }
        //check winner by coloumn
        if(gameField[0][i] > 0 && 
            gameField[0][i] == gameField[1][i] &&
            gameField[1][i] == gameField[2][i]
        ){
            // console.log(gameField[0][i]);
            return gameField[0][i];
        }
        
    }

    //check winner diagonally, bottom left to top right
    if(gameField[0][2] > 0 &&
        gameField[0][2] == gameField[1][1] &&
        gameField[1][1] == gameField[2][0]    
    ){
        // console.log(gameField[0][2]);
        return gameField[0][2];
    }

    //check winner diagonally, top left to bottom right
    if(gameField[0][0] > 0 &&
        gameField[0][0] == gameField[1][1] &&
        gameField[1][1] == gameField[2][2]    
    ){
        // console.log(gameField[0][0]);
        return gameField[2][2];
    }

    if(currentRound === 9){
        return -1;
    }

    return 0;
}

function endGame(winnerID){

    if(winnerID > 0){
         endGameMessage.style.display = "block";
         endGameMessage.firstElementChild.firstElementChild.textContent = player[winnerID-1].name;
         winnerFound = true;
    }
    if(winnerID === -1){
         endGameMessage.style.display = "block";
         endGameMessage.firstElementChild.textContent = "It's a DRAW";
    }
}
