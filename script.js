let Count = 0;
let x = document.getElementsByClassName("x");
let winnerPlayer = document.getElementById("winnerPlayer");
let btn = document.getElementById("btn");
let line = document.getElementsByClassName("line");
let celeb = document.getElementsByClassName("celeb");
let winner=()=>{
   // let winArr = [
   //    [1,2,3]
   //    [4,5,6]
   //    [7,8,9]
   //    [1,4,7]
   //    [2,5,8]
   //    [3,6,]
   //    [1,2,3]
   //    [1,2,3]
   // ]
    if((x1.innerText == x2.innerText && x3.innerText == x2.innerText) && x1.innerText!== `\u00A0` ){
       winnerPlayer.innerText = `Player ${x1.innerText} won`
       celeb.innerHTML = `<img src="celebration.gif" alt="" srcset="">`

    }
    else if((x4.innerText == x5.innerText && x6.innerText == x5.innerText) && x4.innerText!== `\u00A0`){
       winnerPlayer.innerText = `Player ${x4.innerText} won`
       celeb.innerHTML = `<img src="celebration.gif" alt="" srcset="">`
    }
    else if((x7.innerText == x8.innerText && x9.innerText == x8.innerText) && x7.innerText!== `\u00A0`){
       winnerPlayer.innerText = `Player ${x7.innerText} won`
       celeb.innerHTML = `<img src="celebration.gif" alt="" srcset="">`
    }
    else if((x1.innerText == x4.innerText && x7.innerText == x4.innerText) && x1.innerText!== `\u00A0`){
       winnerPlayer.innerText = `Player ${x1.innerText} won`
       celeb.innerHTML = `<img src="celebration.gif" alt="" srcset="">`
    }
    else if((x2.innerText == x5.innerText && x8.innerText == x5.innerText) && x2.innerText!== `\u00A0`){
       winnerPlayer.innerText = `Player ${x2.innerText} won`
       celeb.innerHTML = `<img src="celebration.gif" alt="" srcset="">`
      //  line.style = "transform: translate(25px);"
    }
    else if((x3.innerText == x6.innerText && x9.innerText == x6.innerText) && x3.innerText!== `\u00A0`){
       winnerPlayer.innerText = `Player ${x3.innerText} won`
       celeb.innerHTML = `<img src="celebration.gif" alt="" srcset="">`
    }
    else if((x1.innerText == x5.innerText && x9.innerText == x5.innerText) && x1.innerText!== `\u00A0`){
       winnerPlayer.innerText = `Player ${x1.innerText} won`
       celeb.innerHTML = `<img src="celebration.gif" alt="" srcset="">`
    }
    else if((x3.innerText == x5.innerText && x7.innerText == x5.innerText) && x3.innerText!== `\u00A0`){
       winnerPlayer.innerText = `Player ${x3.innerText} won`
       celeb.innerHTML = `<img src="celebration.gif" alt="" srcset="">`
    }
}


Array.from(x).forEach(ele=>{
    if((Count%2 === 0)){
        winnerPlayer.innerText = ` Player 0 Turn`
        ele.addEventListener("click" , ()=>{
            Count++
            if(Count%2===0){
                ele.innerText = "X"
                winnerPlayer.innerText = `Player 0 Turn`
                winner() 
            }
            else{
                ele.innerText = "0"
                winnerPlayer.innerText = ` Player X Turn`
                winner()
            }
                })
                

    }
    btn.addEventListener("click" ,()=>{
        ele.innerHTML = `\u00A0`
    })
    
})