let display=document.querySelector("#display");
let buttons=document.querySelectorAll("button");

let string="";
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let value=button.innerText;

        if(value==="AC"){
            string="";
            display.value=string;

        }else if(value==="DEL"){
            string=string.slice(0,-1);
            display.value=string;

        }else if(value==="="){
            try{
                string=eval(string).toString();
                display.value=string;
            }catch{
                display.value="error";
                string="";
            }
        }else{
            string=string+value;
            display.value=string;
        }


    });
});

document.addEventListener("keydown", (event) => {

    let value = event.key;


    if (value === "Backspace") {
        string = string.slice(0, -1);
        display.value = string;
    }

    else if (value === "Escape") {
        string = "";
        display.value = "";
    }
    
  else  if (value === "Enter") {
        try {
            string = eval(string).toString();
            display.value = string;
        } catch {
            display.value = "Error";
            string = "";
        }
    }

    else if (
        "0123456789+-*/.%".includes(value)
    ) {
        string += value;
        display.value = string;
    }
});




