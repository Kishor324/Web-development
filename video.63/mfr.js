let arr =[1,2,4,6,13];
// let newArr =[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
 let newArr =arr.map((e ,index,array) =>{
    return e**2
 })

console.log(newArr)
const greaterthanseven =(e)=>{
     if (e>7){
         
         return true
        }
         return false
}
 console.log(newArr.filter(greaterthanseven))

  let arr2 = [ 1,2,3,4,5,6]
   const red =(a,b)=>{
     return a+b
   }
    console.log( arr2.reduce(red))
//   let arr2 = [ 1,2,3,4,5,6]
   const blue =(a,b)=>{
     return a*b
   }
    console.log( arr2.reduce(blue))

    