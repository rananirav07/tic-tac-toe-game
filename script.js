let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".reset");
let nbtn=document.querySelector("#new");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let scr=document.querySelector("#score");

let turnO = true;
let x=0;
let O=0;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const showwinner=(winner)=>
{  
    disablebtn();
    msg.innerText=`Congratulation player ${winner} won.`;
    scr.innerText=`X:${x} O:${O}`;
    msgcontainer.classList.remove("hide");
    


};

const reset=()=>
{
    turnO=true;
    enablebtn();
    x=0;
    O=0;
    msgcontainer.classList.add("hide");

};

const disablebtn=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enablebtn=()=>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}

const checkwinner = () => {
    for(let pat of winpatterns)
    {
        let p1 = boxes[pat[0]].innerText;
        let p2 = boxes[pat[1]].innerText;
        let p3 = boxes[pat[2]].innerText;

        if(p1 !== "" && p2 !== "" && p3 !== "")
        {
            if(p1 === p2 && p2 === p3)
            {
                if(p1==="O")O++;
                else{
                    x++;
                }


                showwinner(p1);

            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turnO)
        {
            box.innerText = "O";
            box.classList.add("ocolor");
            box.classList.remove("xcolor");
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            box.classList.add("xcolor");
            box.classList.remove("ocolor");
            turnO = true;
        }

        box.disabled = true;

        checkwinner();
    });
});
nbtn.addEventListener("click",reset);
btn.addEventListener("click",reset);
