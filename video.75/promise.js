console.log('This is promises')


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {

        reject(" No random number was not supporting you ")

    }

    else {


        setTimeout(() => {
            console.log(" yes i am done");
            resolve("harry")


        }, 1000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {

        reject(" No random number was not supporting you ")

    }

    else {


        setTimeout(() => {
            console.log(" yes i am done");
            resolve("harry")


        }, 3000);
    }
})

let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {

        reject(" No random number was not supporting you ")

    }

    else {


        setTimeout(() => {
            console.log(" yes i am done");
            resolve("harry")


        }, 1000);
    }
})


 let p4 = Promise.resolve([prom1,prom2,prom3])
 p4.then((a) =>{
    console.log(a)
 }
)
.catch ( err=>{
     console.log(err)

})






prom1.then((a) => {
    console.log(a);


}).catch((err) => {
    console.log("err");

})
