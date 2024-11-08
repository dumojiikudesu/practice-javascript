function RPS(){
    const choices  = ["gu","choki","pa","muteki"];
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
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameCountainer.appendChild(select);

    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "640px";
    image.style.height = "380px";
    image.src = "https://image2.b-ch.com/ttl2/5570/5570012a.jpg?impolicy=fitin&ww=640&hh=380";

    gameCountainer.appendChild(image);


    //forEach　配列など複数のデータがあるもの使える。全部やる関数。
    //配列.forEach(配列の中身 => {命令})
}