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
