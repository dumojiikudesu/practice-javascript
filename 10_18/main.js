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
  }
})

function NumberGuessGame(){
    const randomNumber = Math.floor(Math.random()*100)+1;
    console.log(randomNumber);
    let message = document.createElement("p");
    let input = document.createElement("input");
    input.type = "number";
    input.min = 0
    input.max = 100
    input.placeholder = "好きな数字を入力してください（１－１００）"
    let button = document.createElement("button");
    button.textContent = "予想"
    button.addEventListener("click",function(){
        const userGuess = parseInt(input.value);
        if(userGuess === randomNumber){
          message.textContent="正解じゃあないか！"
        }else if(userGuess > randomNumber){
            message.textContent = "高いって"
          }  else{
                  message.textContent = "低いって"
          }
    })
    gameCountainer.appendChild(input);
    gameCountainer.appendChild(button);
    gameCountainer.appendChild(message);
}

function ClickCounterGame(){
  let count = 0;
 
  let button1 = document.createElement("button");
  button1.textContent = "+821";

  let button2 = document.createElement("button");
  button2.textContent = "+10";


  let counter = document.createElement("p");
  counter.textContent = count;
  button1.addEventListener("click",function(){
    count=count+821;
    counter.textContent = count;
  })
  button2.addEventListener("click",function(){
    count=count+10;
    counter.textContent = count;
  })



  gameCountainer.appendChild(button1);
  gameCountainer.appendChild(button2);
  gameCountainer.appendChild(counter);
}


