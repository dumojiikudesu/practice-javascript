function changeColor(){
document.getElementById("text").style.color = "red";
}
//document.querySelector("h1").style.color="red"

//document.getElementById("text").style = "red";
/*これは、ドキュメントの中の「text」というIDを持っている
    タグのスタイルの色を赤にしてください。*/

    let count =0;
    function increaseCount(){
  
    count++;
    document.getElementById("counter").innerText = count;
   // if(count>4){
     //   count = 0;
   // }

       
}
function herasuCount(){
    count--;
    document.getElementById("counter").innerText = count;
}



