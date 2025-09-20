let game =  document.querySelectorAll(".box");
let re_set = document.querySelector("#rest");

let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

 let New = document.querySelector("#New");
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


const resetGame   = ()=> {

    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}




game.forEach((box)=>{
    box.addEventListener("click",()=>{

        console.log("BOX was clicked");
        // box.innerText ="xyz";
        if (turnO){
            box.innerText ="O"
            turnO = false;
               box.style.color ="green"
        }
         else{
            box.innerText ="X";
            box.style.color ="red"
             turnO = true;
         }
         box.disabled = true;
         checkwinner();
    });
});

const disableBoxes = () => {

    for (let box of game){
        box.disabled = true;
    }
};
const enableBoxes = () => {

    for (let box of game){
        box.disabled = false;
        box.innerText = "";
    }
};



// if(turnO = "true"){

    
    const showWinner = (winner)=>

{
    

        msg.innerText = `congratulations, winner is 
        ${winner}`;
        
        msgcontainer.classList.remove("hide");
        
        disableBoxes();
        
        
    }
// };
 

    
    // const NOwinner = (Draw)=>
        
    //     {
            
            
    //         New.innerText = `Draw,  game has no  
    //         ${Draw}`;
            
    //         msgcontainer.classList.remove("hide");
            
    //         disableBoxes();
            
            
    //     }
        
        
    




    const checkwinner =()=>{
        for ( let pattern of winnumber){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(game[pattern[0]].innerText,game[pattern[1]].innerText,game[pattern[2]].innerText);




 let pos1val = game[pattern[0]].innerText;
 let pos2val = game[pattern[1]].innerText;
 let pos3val = game[pattern[2]].innerText;
 
 if (pos1val!= "" && pos2val != ""  && pos3val!="") {
     if (pos1val === pos2val && pos2val === pos3val){
         console.log("winner", pos1val);
         console.log("DRAW", pos1val);
         
         showWinner(pos1val);
        //  NOwinner(pos1val);
        }
    }
    
}
};


//      const checkdraw =()=>{
//         for ( let pattern of winnumber){
//             // console.log(pattern[0],pattern[1],pattern[2]);
//         // console.log(game[pattern[0]].innerText,game[pattern[1]].innerText,game[pattern[2]].innerText);




//  let pos1val = game[pattern[0]].innerText;
//  let pos2val = game[pattern[1]].innerText;
//  let pos3val = game[pattern[2]].innerText;
 
//  if (pos1val!= "" && pos2val != ""  && pos3val!="") {
//      if (pos1val === pos2val && pos2val === pos3val){
//          console.log("winner", pos1val);
//          console.log("DRAW", pos1val);
         
//          //  showWinner(pos1val);
//          NOwinner(pos1val);
//         }
//     }
    
// }
// };



newgamebtn.addEventListener("click",resetGame);
re_set.addEventListener("click",resetGame);
