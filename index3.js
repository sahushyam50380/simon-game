let gameseqence=[];
let usersequence=[];
let startgame=false;

let level=0;
let btn1=["yello","red","purple","green"];
h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(startgame==false){
        console.log("game is started !");
        startgame=true;
    }
    levelup();

});
function gamefleshup(btns){
    btns.classList.add("flash");
    setTimeout(function(){
        btns.classList.remove("flash");


    }, 250);
    

}
function userfleshup(btns){
    btns.classList.add("userflash");
    setTimeout(function(){
        btns.classList.remove("userflash");


    }, 250);
    

}
function levelup(){
    usersequence=[];
    level++;
    h2.innerText=`level ${level}`;

    let rendomindex=Math.floor(Math.random()*3);
    let randomcolor=btn1[rendomindex];
     let randombtnf= document.querySelector(`.${randomcolor}`);
    //  console.log(rendomindex);
    //  console.log(randomcolor);
    //  console.log(randombtnf);
     gamefleshup(randombtnf);
     gameseqence.push(randomcolor);
     console.log(gameseqence);

}
function checkans(indx){
    //console.log("current level is :",level);
    //let currentinx=level-1;
    if(gameseqence[indx]==usersequence[indx]){
         if(gameseqence.length==usersequence.length){
            setTimeout(levelup,1000);
         }
       // console.log("value is same")
    }
    else{
        h2.innerHTML=`   game is over and your score is <b>${level}</b> <br>  and start again `;
        resetTo();
    }
}

 function userflesh(){
     console.log("button was pressed");
     let btn=this;
    console.log(btn);
    userfleshup(btn);
    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    usersequence.push(usercolor);
    checkans(usersequence.length-1);

}


allbtn=document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click",userflesh);
}
 

function resetTo(){
    gameseqence=[];
    usersequence=[];
    startgame=false;

    level=0;

}