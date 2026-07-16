let input=document.querySelector("#inputbox");
let btn=document.querySelector("button");
let task=document.querySelector("#task");
let h3=document.querySelector("h3");
let validmess;


btn.addEventListener("click",()=>{

    let usertask=input.value.trim();

    if(usertask===""){
        if(!validmess){
            validmess=document.createElement("p");
            validmess.innerText="Plese Enter Task";
            h3.prepend(validmess);
        }
        return;
    }
    if(validmess){
        validmess.remove();
        validmess=null;
    }

    let li=document.createElement("li");
    let btn1=document.createElement("button");
    btn1.classList.add("delete");

    if(usertask!=""){
        li.innerText=usertask;
        task.appendChild(li);
        btn1.innerText="Delete";
        li.append(btn1);
   
    }
    input.value="";
    
    btn1.addEventListener("click",()=>{
        task.removeChild(li);
    });

});

