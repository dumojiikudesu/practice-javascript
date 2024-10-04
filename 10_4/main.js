//クリックされたら動作する

function errorInput(){
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;
  if(month<1 || month>12){
    alert("適切な値ではありません");
    return
  }

  console.log("month",month,"day",day)
  
} 

const monthSelect = document.getElementById("month");
monthSelectlist();
monthSelectlist(){
  for (let i=1;i<=12;i++){
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i + "月";
    monthSelect.appendChild(option);
  }
}



//document.getElementById("month")はタグを確認するだけ
//valueはそのタグの値を示す

/*javaScriptのプログラムとHTMLファイルはどこで対応しているか
タグについているIDで紐づく
タグの中にある負荷情報のことを属性という
console.log()はｃ言語でいうところのprintf();です
*/