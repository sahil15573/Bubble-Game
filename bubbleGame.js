function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 108; i++) {
        let num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector(".game-area").innerHTML = clutter;
}
let timer = 10;
let timeInterval;
function runTimer() {
    clearInterval(timeInterval);
    timer = 10;
    document.querySelector("#timerValue").textContent = timer;
    timeInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }
        else {
            clearInterval(timeInterval);
            document.querySelector(".game-area").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000)
}
let hitNum;
function hit() {
    hitNum = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = hitNum;
}
let score  = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}
/*EVENT BUBBLING*/
/*
jispe click karoge wo element par event raise hoga , aur event na milne par...event element ke parent par listener dhundhega , waha bhi na milne par event ke parent ke parent par listener dhundhega.
*/
document.querySelector(".game-area").addEventListener("click",function(detailsDedo){
    let clickedNum = Number(detailsDedo.target.textContent);
    if(clickedNum === hitNum){
        increaseScore();
        makeBubble();
        hit();
        runTimer();
    }
});


makeBubble();
runTimer();
hit();

