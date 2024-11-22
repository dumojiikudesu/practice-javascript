function RPS(){
    const choices  = ["gu","choki","pa"];
    
    //この書き方は、配列です。c言語参照


    // let select = document.createElement("select");
    // let option = document.createElement("option");
    // let option2 = document.createElement("option");
    // let option3 = document.createElement("option");
    // const gu = "gu";
    // option1.value = gu;
    // option1.textContent = gu ;
    // select.appendChild(option);
    // option2.value = "choki";
    // option2.textContent = "choki" ;
    // select.appendChild(option2);
    // option3.value = "pa";
    // option3.textContent = "pa" ;
    // select.appendChild(option3);
    // gameCountainer.appendChild(select);
    let select = document.createElement("select");
     select.id = "choices"
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        option.id = choice;
        select.appendChild(option);
    });
    gameCountainer.appendChild(select);

    let choiceButton = document.createElement("button")
    choiceButton.textContent = "決定"

    gameCountainer.appendChild(choiceButton);

    
    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "640px";
    image.style.height = "680px";

    let enemyImage = document.createElement("img");
    enemyImage.alt = "Choice";
    enemyImage.style.width = "640px";
    enemyImage.style.height = "680px";

    choiceButton.addEventListener("click",function(){
        switch(select.value){
        case "gu":
             image.src = "https://image2.b-ch.com/ttl2/5570/5570012a.jpg?impolicy=fitin&ww=640&hh=380";
            break;
        case "choki":
            image.src = "https://profile.yoshimoto.co.jp/assets/data/profile/503/64234965753faad89c53d6dedf6a43747741e2ce.jpg";
            break;
        case "pa":
            image.src = "https://neoapo.com/images/character/1952/931ceb74927861dd9592efcc62c90f86.png";
            break;
        default:
            break;
    }
    let enemyHand = choices[Math.floor(Math.random() * choices.length)];
    
})
    gameCountainer.appendChild(image);


    //forEach　配列など複数のデータがあるもの使える。全部やる関数。
    //配列.forEach(配列の中身 => {命令})
}