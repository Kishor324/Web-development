const express = require('express')
 const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)
app.use('/shop',shop)

app.get('/', (req, res) => {
    console.log(" hey its a get request")
    res.send('Hello World65!')
})
app.post('/', (req, res) => {
    console.log(" hey its a post request")
    res.send('hey this is a beautiful world')
})
app.put('/', (req, res) => {
    console.log(" hey its a put request")
    res.send('hey world put!')
})
app.post('/', (req, res) => {
    console.log(" hey its a post request")
    res.send('hey this is a beautiful world')

})
//  app.get('/index',(req ,res)=>{
//      console.log(" its a get request")
//       res.send('hey its index.html')

//  })
 
 app.get('/index',(req ,res)=>{
     console.log(" its a get request")
      res.sendFile('templates/index.html',{root :__dirname})

 })

  app.get('/api',(req ,res)=>{
     res.json({ a:1 ,b:2, c:3, d:4, name:[" harry", "kishor"]})
 })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
