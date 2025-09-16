// //Qn1: get the user a input using promt (" ENter a number ") . scheck if the numer is a multple of  5 or not
//  let num =prompt("Enter the numer")

// if (num %5 === 0){

//     console.log(num, " is multiple of 5 ");

// }
// else{
//       console.log(num, " is not multiple of 5 ")
// }

//Qn2 write a code which can gives grades to students ac0rding tp their scroes


let score = prompt("your scorwe is");
let garde;

 if (score >=90 && score <= 100){
    garde = "A";

 }
else if (score >=70 && score <= 89)
{
    garde = "B";
    
}
else if (score >=60 && score <= 69)
{
    garde = "c";

}
else if (score >=50 && score <= 59)
{
    garde = "d";

}
else if (score >=0 && score <= 49)
{
    garde = "F";

}
 console.log (" accordng to your scroes , your garde was : ", garde)
