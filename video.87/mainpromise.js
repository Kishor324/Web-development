import fs from "fs/promises"
let a = await fs.readFile("kishor.txt")
// let b = await fs.writeFile("kishor.txt","\n\n\n\n this is amzing promise")
let b = await fs.appendFile("kishor.txt","\n\n\n\n this is amzing promise")
console.log(a.toString(),b)