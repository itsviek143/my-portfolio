let catimg=document.querySelector("#catimage");
let dogimg=document.querySelector("#dogimage");
let emojiimage=document.querySelector("#emojiimage");
let memsimage=document.querySelector("#memsimage");

let getcat=document.querySelector(".getcat");
let getdog=document.querySelector(".getdog");
let getemoji=document.querySelector(".emoji");
let getemems=document.querySelector(".mems");

    async function getcatimage() {
         const response = await fetch("https://api.thecatapi.com/v1/images/search");

        const data=await response.json();
        console.log(data[0].url);
        let image=data[0].url;
        catimg.src=image;
        
    }


    async function getdogimage() {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
       const data=await response.json();
        console.log(data);
        let image=data.message;
        dogimg.src=image;
    }


    async function getemojiimage() {
         const response = await fetch("https://emojihub.yurace.pro/api/random");

        const data=await response.json();
        console.log(data);
        emojiimage.innerHTML=data.htmlCode[0];
        // let image=data[0].url;
        // catimg.src=image;
    }

     async function getmemsa() {
         const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");

        const data=await response.json();
        console.log(data.text);
        memsimage.innerText=data.text;
  
    }

    getcat.addEventListener("click",getcatimage);

    getdog.addEventListener("click",getdogimage);

    getemoji.addEventListener("click",getemojiimage);

     getemems.addEventListener("click",getmemsa);
