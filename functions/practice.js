// QN1

//  function countvoules(str){
//     let count = 0;

//     for (const char of str){

//        if (char ==="a"|| char==="e"||char==="i"||char==="0",char==="u")
//      {
//         count++;

// }    }

//  console.log(count);
//  }

//  const countvow =(str)=>{
//     let count = 0;

//     for (const char of str){

//        if (char ==="a"|| char==="e"||char==="i"||char==="0",char==="u")
//      {
//         count++;

// }    }

//  return count;
//  };

//  lets practice


//  for a given arry of number , print the square of each value using the foreach loop

// let arr = [2, 3, 4, 5, 6, 7]

// arr.forEach((val) => {


//    //  another method 
//    console.log(val * val) // val **2
//    console.log(val ** 2) // val **2

   //   let square = val*val
   //   console.log(square)
// })



// Qns We arae given of marks of stuentss. filter out of the marks of students that scoreed 90+.


// let marks = [ 88,77,97,96,92]

// let newmarks = marks.filter((marks)=>
//    {

//  return marks >90;

// }
// );
// console.log(newmarks);


// let arr =[ 1,3,4,5,6]
// let newarr = arr.map ((num) =>{


// return num;

// });
//  console.log(newarr);


let n = prompt("enter the number")


let arr =[];
for (let i = 0; i < n; i++) {
   arr [i-1]=i;
}
 console.log(arr);

 let sum = arr.reduce((rec, curr)=>{

   return rec + curr;


 });
  console.log("sum=",sum);

 let factriol = arr.reduce((rec, curr)=>{

   return rec * curr;


 });
  console.log("factriol=",factriol);