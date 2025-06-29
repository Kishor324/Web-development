//  async  function getData(){
// // Simulate getting data form a server
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//            resolve(450) 
//         }, 3500);
//     })
// }


//Settle means resolve or reject 
// reosolve means promise has settled successfully
// resolve means promsie has not settled succsesfully

 async  function getData(){
// Simulate getting data form a server
//  let x = await fetch(' https://jsonplaceholder.typicode.com/todos/1')

 let x = await fetch(' https://jsonplaceholder.typicode.com/posts',{

method: 'post',
body:JSON.stringify({
    title :' foo',
    body: 'bar',
    userid:1,

}),
headers:{
    'content-type': 'application/json;  charset-UTF-8',
},
    
}


)
 let data =  await x.json()
 return data
}
async function main(){

    
    console.log(" Loading modules");
    console.log(" Do something else")
    
    
console.log(" Load Data")

let data = await getData()



console.log("data")


console.log (" Process Data")

console.log("task 2")

}

 main()
//  data.then((v)=>{

     
//      console.log("data")
//      console.log (" Process Data")
     
     
//      console.log("task 2")
//     })