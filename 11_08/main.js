const gameSelector = document.getElementById('game-selector');
const gameCountainer = document.getElementById('game-container');

 gameCountainer.textContent="目指すはパーフェクトゲームだ！！"

gameSelector.addEventListener("change",function(){
  gameCountainer.innerHTML = "";
  switch(gameSelector.value){
    case "none":
        gameCountainer.textContent="目指すはパーフェクトゲームだ！！"
        break;
    case "click-counter":
        ClickCounterGame();
        break;
    case "number-guess":
      NumberGuessGame()
        break;
    case "RPS":
      RPS();
        break;
  }
})




