let userscore= 0;
let compscore =0;

 const choices = document.querySelectorAll(".choice")
 const msg = document.querySelector("#msg")
 const userscorepara = document.querySelector("#user-score")
 const compscorepara = document.querySelector("#comp-user")

 const gencompchoice = () =>{

    const options =["rock",  "paper","scissors"];
      const randnum = Math.floor(Math.random()*3);
      return options[randnum];

 }

 const DrawGame = () =>{

  // console.log(" game is Draw!");
  msg.innerText = " Game is draw ! . so re stated game"
msg.style.backgroundColor = "#081b31";

 };

 const showwinner = (userid, userchoice, compchoice) => {

  if( userid){

    userscore++;
    userscorepara.innerText = userscore;
    // console.log ("you win! ")
    msg.innerText=`you win ! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    // msg.style.backgroundcolor = "blue";
  }
  else {
 compscore++
    // compscore++;
    compscorepara.innerText =  compscore;
    // console.log(" you win!")
  msg.innerText =  `you lossee !  ${compchoice} beats   your ${userchoice}`;
 msg.style.backgroundColor = "red";

  }
 };




const playgame = (userchoice) =>{


    // console.log("user choice=",userid)

    // generate computer choice
    const compchoice = gencompchoice();
    // console.log("comp choice = ",compchoice);
    
    
    
    if(userchoice === compchoice){
      //  draw game 
      DrawGame();
    } 
    // else if (userchoice === compchoice){
    else{
      let userid = true;
      if (userchoice === "rock"){
        // secisosrs, paper
        userid = compchoice === " Paper" ? false : true;
   }
 else if (userchoice === "paper"){
  // rock, rock
   userid = compchoice === "secissors" ? false : true
   }

 else {
   // rock, paper
   userid = compchoice === " Rock" ? false : true
  }
  
  showwinner(userid,userchoice,compchoice);
}
};



  choices.forEach((choice) => {

// console.log(choice);
choice.addEventListener("click",() => {
const userchoice = choice.getAttribute("id")
console.log("Choice was clicked",userchoice)

playgame(userchoice);
});

  });