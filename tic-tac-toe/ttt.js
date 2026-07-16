let status=document.querySelector("#status");
let restart=document.querySelector("#restart");
let cells=document.querySelectorAll(".cell");

let currplayer="x";
let gameactive=true;
let x=document.querySelector("#playerX");
let o=document.querySelector("#playerO");
let drawele=document.querySelector("#draw");
let scoreX=0;
let scoreO=0;
let draw=0;

let board=[
    "","","",
    "","","",
    "","",""
];

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

function winner(){
     confetti({
            particleCount: 500,
            spread: 200,
            origin: {
                y: 0.5
            }
        });

}

cells.forEach((cell,index)=>{
    cell.addEventListener("click",()=>{
        if(board[index]!==""||!gameactive){
            return;
        }

        cell.innerText=currplayer;
        board[index]=currplayer;
        cell.classList.add(currplayer);

        winnershow();
    });

});

function winnershow(){
    
    for(let pattern of winpattern){

        let a=pattern[0];
        let b=pattern[1];
        let c=pattern[2];

        if(board[a] && board[a]===board[b] && board[b]===board[c]){

            cells[a].classList.add("win");
            cells[b].classList.add("win");
            cells[c].classList.add("win");
            // status.innerText=` 🥇winner is ${currplayer}`;
            
            winner();
            if(currplayer==="x"){
                scoreX++;
                x.innerText=scoreX;
                status.innerText=` 🥇winner is ✖️`;
            }else{
                scoreO++;
                o.innerText=scoreO;
                status.innerText=` 🥇winner is ⭕`;
            }
            gameactive=false;
            return;
        }

    }

    if(!board.includes("")){
        status.innerText=" 🤝match draw";
        draw++;
        drawele.innerText=draw;
        gameactive=false;
        return;
    }

    if(currplayer==="x"){
            currplayer="o";
            status.innerText="Player ⭕ Turn ";

        }else{
            currplayer="x";
            status.innerText="Player ✖️ Turn ";
        }


}

restart.addEventListener("click",()=>{
    board=[
    "","","",
    "","","",
    "","",""
];
cells.forEach((cell)=>{
    cell.innerText="";
    
    cell.classList.remove("o");
    cell.classList.remove("x");
    cell.classList.remove("win");
    
});
if(currplayer==="x"){
    currplayer="o";
    status.innerText="Player ⭕ Turn ";

}else{
    currplayer="x";
    status.innerText="Player ✖️ Turn ";

}
gameactive=true;

});
