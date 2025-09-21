//synchronous line to line excutation garxa ani top to bootm garney garxa so aayels same hami ley tei method ma code lakhya theya
// console.Log("one")
// console.log("two")
// console.log("three")

//Aynchronous yo vanaley uesla kam garxa jun thau traffic xa tei lai panding rakh xa ani aru excutation garxa


//  function hello(){
//     console.log("hello")

//  }

// setTimeout(hello,2000); //timeout

// console.log("one");
//  console.log("two")
// setTimeout(( ) => {
//      console.log("hello")

// }, 4000 // time out
// );

// console.log("three")
// console.log("four")



// callback is a agrument of ahother function

// function sum(a,b){
//     console.log(a + b);
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a, b);

// }

// // calculator(1 ,3 ,sum);

// calculator(1,2,(a, b) => {

//      console.log(a + b);
// });

// const hello =()=> {
//     console.log("HEllo!");

// };
// setTimeout(hello,3000);


//nesting

// let age = 88;

// if(age>=18){
//     if(age >=60){
//    console.log("senior")

//     }
//     else{
//         console.log("Middle");
        
//     }
// }
//  else{
//     console.log("chlid")
//  }


// callback hell

//kina ki yesam callback vitra call hunxa yeslai nested call vanain xa so tesai ley yo lai callback hell
// hami callback hell solve gadai Promise use hunxa
function getdata(dataid, getnextdata) {
    // setTimeout(getdata, 4000);
    setTimeout(() => {
        console.log("data",dataid);

        if(getnextdata){

            getnextdata();
        }
        
    }, 2000);
}

getdata(1,() => {

    console.log("getting data2....");
    getdata(2,()=>{
         console.log("getting data3....");

        getdata(3 ,()=>{
             console.log("getting data4....");

 getdata(4)
        });
    });

});