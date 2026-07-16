let message = document.querySelector("#message");
let userinput = document.querySelector("#userinput");
let Try = document.querySelector("#try");
let btn = document.querySelector("button");
let errormess = document.querySelector("#error");
let body=document.querySelector("body");

let winnum = getWinningNumber();
let count = 0;
let gameWon = false;


function getWinningNumber() {
    let randnum = Math.floor(Math.random() * 100) + 1;
    console.log("correct number =",randnum);
    return Number(randnum);
}

btn.addEventListener("click", () => {

 
    if (gameWon) {

        winnum = getWinningNumber();
        count = 0;
        gameWon = false;
        Try.innerText = "0";
        message.innerText = "";
        errormess.innerText = "";
        userinput.value = "";

        btn.innerText = "Submit";
        return;
    }

    let value = userinput.value.trim();
    
    if (value === "" || isNaN(value)) {

        errormess.innerText = "Please Enter Valid 🔎 Number";


        return;
    }
    value = Number(value);
    count++;
    Try.innerText = count;


    if (value === winnum) {
        message.innerText = " 😍Congratulations! You won the game";
        btn.innerText = "Play Again 🔄️";

        gameWon = true;


        confetti({
            particleCount: 500,
            spread: 200,
            origin: {
                y: 0.5
            }
        });

    }

    else if (value > winnum) {

        message.innerText = "You Entered Large ⬆️ Number";

        userinput.value = "";

    }

    else {

        message.innerText = "You Entered Small ⬇️ Number";

        userinput.value = "";
    }

});


userinput.addEventListener("focus", () => {

    errormess.innerText = "";

});

userinput.addEventListener("keydown",(evt)=>{
    if(evt.key==="Enter"){
        btn.click();
    }

});

userinput.addEventListener("keypress",(evt)=>{
    if(evt.key!=="Enter"){
        errormess.innerText = "";
    }
});
