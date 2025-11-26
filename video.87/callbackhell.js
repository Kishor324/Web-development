//frist pratical example of call back hell
fs.writeFile("kishor2.txt", "kishor is  a good boy2", () => {
       console.log("done")
    fs.readFile("kishor2.txt", (error, data) => {
        console.log(error, data.oStrting())
          })})
         //again we will try to make call by hell
    
         //frist pratical example of call back hell
fs.writeFile("kishor2.txt","kishor is a good boy2", ()=>{
    console.log("done")
     fs.readFile("kishor2.txt", (error,data)=>{
        console.log(error,data.oStrting())
     })
})//frist pratical example of call back hell
fs.writeFile("kishor2.txt","kishor is a good boy2", ()=>{
    console.log("done")
     fs.readFile("kishor2.txt", (error,data)=>{
        console.log(error,data.oStrting())
     })
})
   // mlb dheri fiels huney vaye ra tyo lai arrange garna garo huney bayo taba its to complex for study