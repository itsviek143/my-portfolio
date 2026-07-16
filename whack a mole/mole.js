let scoreelement=document.querySelector("#score");
let timerelement=document.querySelector("#timer");
let holes=document.querySelectorAll(".hole");
let startbtn=document.querySelector("#start");
let resetbtn=document.querySelector("#reset");
let highscore=document.querySelector("#HighScore");
let hyscore=0;

let currmole=null;
let moleinterval;
let timerInterval;
let score=0;
let time=30;




function showmole(){

    holes.forEach(function(hole){

    hole.classList.remove("mole");
    hole.innerText="";

    });

    let randamnum=Math.floor(Math.random()*holes.length);

    currmole=holes[randamnum];

    currmole.classList.add("mole");
    currmole.innerText="🙋‍♂️";


}



holes.forEach((hole)=>{
    hole.addEventListener("mouseover",()=>{
        if(hole===currmole){
            score++;

            scoreelement.innerText=score;

            hole.classList.remove("mole");
            hole.innerText="";
            currmole=null; 
        }

    });

});

startbtn.addEventListener("click",()=>{
    clearInterval(moleinterval)
    clearInterval(timerInterval);

    score=0;
    time=30;

    scoreelement.innerText=score;
    timerelement.innerText=time;
    showmole();

    moleinterval=setInterval(showmole,500);

    timerInterval=setInterval(()=>{
        time--;
        timerelement.innerText=time;

        if(time===0){
            clearInterval(moleinterval);
            clearInterval(timerInterval);

            holes.forEach((hole)=>{
                hole.innerText="";
                hole.classList.remove("mole");
                
            });

            if(hyscore<score){
                    highscore.innerText=score;
                    hyscore=score;
                }

            currmole=null;
            alert(`game over your score:-${score}`);  
            
        }


    },1000);
    

});



resetbtn.addEventListener("click",()=>{
    score=0;
    time=30;
    scoreelement.innerText=score;
    timerelement.innerText=time;
    clearInterval(moleinterval);
    clearInterval(timerInterval);

    if(currmole){
    currmole.classList.remove("mole");
    currmole.innerText="";
    }
    currmole=null;

});

