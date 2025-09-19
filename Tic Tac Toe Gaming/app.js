let game =  document.querySelectorAll(".box");
let re_set = document.querySelector("#rest");
let turnO = true;

const winnumber =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [2,4,6],
[6,7,8],
];

game.forEach((box)=>{
    box.addEventListener("click",()=>{

        console.log("BOX was clicked");
        // box.innerText ="xyz";
        if (turnO){
            box.innerText ="O"
            turnO = false;
        }
         else{
            box.innerText ="X";
             turnO = true;
         }
         box.disabled = true;
         checkwinner();
    });
});

