const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")




// ...

app.use('/blog', blog)

//  app.use(express.static("public"))

//middleware 1 -  Logger for our application

app.use((req, res, next) => {
    // console.log('LOGGED1')
    console.log(req.headers)
    req.kishor = " hello i am kishor bhaii";
 fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
    //    res.send("HAcker by middleware!")
    next()
})
//middleware 2
app.use((req, res, next) => {
    console.log('LOGGED2')
     req.kishor = " hello i am kishor bhaii";
    next()
})

app.get('/', (req, res) => {
    res.send('hello world!')
})


app.get('/about', (req, res) => {
    res.send('hello about '+ req.kishor)
})


app.get('/conatact', (req, res) => {
    res.send('hello conatct!')
})

app.listen(port, () => {
    console.log(' Example app listening pn port ${port')
})