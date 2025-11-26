const fs = require("fs")

//  console.log(fs)

console.log("starting")
//   fs.writeFileSync("kishor.txt","kishor is a good boy");


fs.writeFile("kishor2.txt", "kishor is a good boy2", () => {
    console.log("done")
    fs.readFile("kishor2.txt", (error, data) => {
        console.log(error, data.oStrting())
    })
})
fs.appendFile("kishor.txt","kishorrobo",(e,d)=>{
 console.log(d)    
})


console.log("Ending")