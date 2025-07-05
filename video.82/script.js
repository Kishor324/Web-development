// async function sleep(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);
//     })

// }
//  function sum(a,b,c){
//     return a+b+c
//  }
(async function main(a1) {
    var a1
    console.log(a1)
    // let  a = await sleep()
    // console.log(a)
    // let  b = await sleep()
    // console.log(b);

    //  let[ x,y,...rest ]= [1,5,7,0,10,8]
    //  console.log(x,y,rest)


    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let { a, b } = obj
    console.log(a, b)

    let arr = [1, 2, 5]
    console.log(arr[0] + arr[1] + arr[2])
    console.log(sum(...arr))






})()
var a1 = 6
const sleep = async () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })

}
const sum = async (a, b, c) => {
    return a + b + c

}
// before initilization const use garna mildaye na only let and var

// can't be acces sum before initilization that variables
