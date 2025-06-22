console.log("script.js initilalizing")
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// let boxes = document.querySelector(".container").children

// function getRandomColor(){
//     // let val1 = 233;
//     // let val2 = 124;
//     // let val3 = 111;
//     // return`rgb(${val1}, ${val2} ${val3})`
    
// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })
// }
// //  Array.form(boxes).forEach(e => {
// // e.style.backgroundColor = getRandomColor()
// // e.style.Color = getRandomColor()
// //  });let boxes = document.querySelector(".container").children 


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})