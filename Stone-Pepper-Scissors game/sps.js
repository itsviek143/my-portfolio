let btns = document.querySelector(".sps");
let message = document.querySelector("h2");
let explain = document.getElementById("choices");
let resetbtn=document.querySelector("#reset");

let youwin=document.querySelector("#youwin");
let compwin=document.querySelector("#compwin");
let draw=document.querySelector("#draw");
let youwincount=0;
let compwincount=0;
let drawcount=0;


let emoji = {
    stone: "🪨",
    pepper: "📰",
    scissors: "✂️"
};

function winner(){
     confetti({
            particleCount: 500,
            spread: 200,
            origin: {
                y: 0.5
            }
        });
        youwincount++;
        youwin.innerText=youwincount;

}


resetbtn.addEventListener("click",()=>{
    youwincount=0;
    compwincount=0;
    drawcount=0;
    youwin.innerText=0;
    compwin.innerText=0;
    draw.innerText=0;
});



btns.addEventListener("click", (evt) => {

    if (!evt.target.classList.contains("btns")) {
        return;
    }
    let userchoice = evt.target.id;

    let comchoice;

    let randnum = Math.floor(Math.random() * 3) + 1;

    if (randnum === 1) {
        comchoice = "stone";

    } else if (randnum === 2) {
        comchoice = "pepper";

    } else {
        comchoice = "scissors";
    }

    if (userchoice === comchoice) {

        message.innerText = "😐 Draw 🤝";
        drawEffect();
        drawcount++;
        draw.innerText=drawcount;

    } else if (
        userchoice === "stone" &&
        comchoice === "scissors"
    ) 
    {

        message.innerText = "💖You Are Winner 🏆";
        winner();

    } else if (
        userchoice === "pepper" &&
        comchoice === "stone"
    ) {

        message.innerText = "💖You Are Winner 🏆";
       winner()

    } else if (
        userchoice === "scissors" &&
        comchoice === "pepper"
    ) {

        message.innerText = "💖You Are Winner 🏆";
        winner()

    } else {
        compwincount++;
        compwin.innerText=compwincount;
        message.innerText = "Computer 🤖 Is Winner🏆";
        confetti({
        particleCount: 300,
        spread: 120,
        startVelocity: 35,
        gravity: 1.5,
        origin: {
            x: 0.5,
            y: 0.4
        },
        colors: ["#ff0000", "#8b0000", "#333333"]
    });
        
    }

    explain.innerHTML =
        "You: " + emoji[userchoice] + " " + userchoice +
        "<br>Computer: " + emoji[comchoice] + " " + comchoice;

});

function drawEffect() {
    const gameBox = document.querySelector(".container");

    gameBox.classList.remove("draw-effect");
    void gameBox.offsetWidth;

    gameBox.classList.add("draw-effect");
}