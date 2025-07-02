let a = prompt("Enter  first number ")

let b = prompt("  Enter second number")

if (isNaN(a) || isNaN(b)) {

    throw SyntaxError(" Soory  this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

 function main(){
 let x = 1;
     try {
         
         console.log(" The sum is ", sum )

 return true

        } catch (error) {
            
    console.log(" Error aa gaya bhai sahi kar lay")

     return false
}
finally {
    console.log("Files are being closed and db connection is beign closed")

}

//  The sum is  NaN if u use int thau ma any string diya paxchi
}
 let c = main()