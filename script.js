let choice = document.querySelectorAll(".choice");
let reset = document.querySelector("button");
let computer= document.querySelector(".computer");
let result = document.querySelector(".res");
const comRock = document.getElementById("AIRock");
const comPaper = document.getElementById("AIPaper");
const comScissor = document.getElementById("AIScissor");
const comUkn = document.getElementById("Unknown");
let userwin = false;
let draw = true
choice.forEach((value,index) =>
{
    value.addEventListener("click",() =>
    {
        let comopt =computerRandom();
        check(index, comopt);
        printResult(comopt);
    })
})
let computerRandom =() =>
{
    return Math.floor(Math.random()*3);
};
let check =(i,c)=>
{
if(i==c)
{
    draw=true;
    return;
}
if((i==0 && c==2)||(i==1 && c==0)||(i==2 && c==1) )
{
    userwin=true;
    draw =false
}
else
{
    userwin =false;
    darw=false;
}
}
let printResult =(comopt)=>
{
    switch(comopt)
    {
        case 0 : {computer.innerText ="Computer Choice :  Rock ";
                    comRock.style.visibility= "visible";
                    comPaper.style.visibility= "hidden";
                    comScissor.style.visibility= "hidden";
                    comUkn.style.visibility= "hidden";
                    break;
                    }
        case 1 : {computer.innerText ="Computer Choice :  Paper ";
                    comRock.style.visibility= "hidden";
                    comPaper.style.visibility= "visible";
                    comScissor.style.visibility= "hidden";
                    comUkn.style.visibility= "hidden";
                    break;
                 }
        case 2 : {computer.innerText ="Computer Choice :  Scissor ";
                    comRock.style.visibility= "hidden";
                    comPaper.style.visibility= "hidden";
                    comScissor.style.visibility= "visible";
                    comUkn.style.visibility= "hidden";
                    break;
                    }

    }
    
    
    
    if(draw)
    {
        result.innerText = " Game Draw";
    }
    else{
        if(userwin)
        {
            result.innerText = "You Win ";
        }
        else
            result.innerText = "You Lose ";
    }
}

reset.onclick=() =>
{
    computer.innerText = "Computer Choice : ";
    result.innerText="Result : ";
    comRock.style.visibility= "hidden";
    comPaper.style.visibility= "hidden";
    comScissor.style.visibility= "hidden";
    comUkn.style.visibility= "visible";
};