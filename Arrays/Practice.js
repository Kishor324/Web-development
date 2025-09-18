// QN1 fro the given marks of studenst [ 85,97,44,37,76,60]
// find the averagr of the entiries class

// let marks_sturdent = [85,94,44,37,76,60];


// let sum =0;

// for (let i = 0; i < marks_sturdent.length; i++) {
//    average = (marks_sturdent + i)/marks_sturdent.length;
//    console.log(average);

    
// }

// for (let num of marks_sturdent){
//      sum = sum + num;

// }

// let average = (sum)/ marks_sturdent.length

//  console.log(`average marks of the class= ${average}`)
// console.log(average);
//  console.log(sum);




// Qn2 discunt paxchi ko aamount aary vitra store gareny

// let item =[ 250,645,300,900,50];
// let amount=0;
// for(let num of item){
    
// // amount = item[0]/10;
// // amount = item[1]/10;
// amount = item[2]/10;
// // amount = item[3]/10;
// // amount = item[4]/10;

//     // console.log(amount);
//     let discount = (item [2]- amount);
//     console.log(discount);
// }
// another method

// let item =[ 250,645,300,900,50];
// let idx =0;
// for (let val of item){

//     console.log(`value at index ${idx} =${val}`);

//     let offer = val/10;
//     item[idx]= item [idx]- offer;
//     console.log(`value after offers = ${item[idx]}`);
//     idx++;
// }
// for(let )



 // QS array craet gareny ani tesbata hamley array ko methoda use gar ney foe further study

 let companies =[ "Bloomberg", "microsoft","uber","google","idm", "netflix" ];

 console.log(companies );

 // REmove the frist company from the array

 let val = companies.shift();
console.log("deleted",val);

companies.splice(2,1,"ola");

companies.push("amazon");