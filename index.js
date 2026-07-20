function batbtn (){
 const playerScore = document.getElementById("score")
 const balls = document.getElementById("balls")
  
 let score = Number(playerScore.textContent);
 let ball =Number(balls.textContent);

 if (ball > 0){
   score++
   ball--
   playerScore.textContent =score;
   balls.textContent = ball;
 }
 else{
    alert("game over!")
 }
}

function restart() {
    const playerScore = document.getElementById("score");
    const balls = document.getElementById("balls");

    playerScore.textContent = 0;
    balls.textContent = 100;
}

