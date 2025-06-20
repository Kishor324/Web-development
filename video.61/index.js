let random = Math.random()
 
 let a = prompt(" ENter frist number")
 let c = prompt(" ENter operation")
  let b =prompt(" ENter second number")

//  let a = prompt(" ENter frist number")
//   let b =prompt(" ENter second number")
//  let c = prompt(" ENter operation")


  let obj ={

     "+" : "-",
     "*": "+",
     "-": "/",
     "/":"**"

  }


   console.log(random)

  if (random>0.1){
    //preform correct calculation

     console.log(` This is result ${ (`$(a) $(c) $(b)`  )}`)
  }
   else {
     // preform wrong calculation
     c = obj[c]
     console.log(` This is result ${ (`$(a) $(c) $(b)`  )}`)
   }