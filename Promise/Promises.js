//  function asyncfun1() {

    
//     return new Promise (( resolve, reject)=>{

//         setTimeout (()=>{

//              console.log("data1")
//              resolve("success")
//             // reject("Network error");

//         },4000
    
//     );
//     });
//  }
//  function asyncfun2() {

    
//     return new Promise (( resolve, reject)=>{

//         setTimeout (()=>{

//              console.log("data2")
//              resolve("success")
//             // reject("Network error");

//         },6000
    
//     );
//     });
//  }


//   console.log("feteching data1.....");
//   let p1 = asyncfun1();
//   p1.then((res)=>{
//   console.log("feteching data2.....");
//   let p2 = asyncfun2();
//   p1.then((res)=>{ })
//   })

//   console.log("feteching data2.....");
//   let p2 = asyncfun2();
//   p1.then((res)=>{

//      console.log(res);
//   })


//   p1.catch((err)=>{

//      console.log(err);
//   })











// const getPromise = () => {
//    return new Promise ((resolve,reject ) =>{

//     console.log("i am a promsie")

//     // three stpes of promise
// //pending
//     // resolve("suscuss");
//     reject("some error are occures");
// });
// };
// let promise = getPromise();
// promise.then((res) =>
// {
//     console.log("Promise fullfiled",res);
// });

// promise.catch((err) =>
// {
//     console.log("Rejected",err);
// });



// pending: the reuslt is undefined;
//  resolved : the result is a value (fulfilled);( result)
//  reject: the result  s an arror object ( error)

//  function getData(dataId , getnextdata){
//     return new Promise ((resolve, reject) =>
//     {

// setTimeout(() => {
// //     console.log("Data",dataId)
// // resolve("success")

// reject ("error")
//     if (getnextdata){

//         getnextdata();
//     }
// }, 5000);

//     });





//  }

function getData(dataId ){
    return new Promise ((resolve, reject) =>
    {

setTimeout(() => {
    console.log("Data",dataId)
resolve("success")

}, 5000);

    });
}


// promise chian
//  let p1 = getData(1);
// p1.then((res)=>{
//     console.log(res);
// });

// getData(1).then((res)=>{
//     console.log(res);

//     getData(2).then(() =>{


//         console.log(res);
//     })

// })

getData(1)
.then((res)=>{

    console.log("getting data2.....")
    return getData(2);
})

.then((res)=> {
    console.log("getting data3.....")
    return getData(3);
})
.then((res)=>{

    console.log(res);
})