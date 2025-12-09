const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
//  app.set ('view engine ', 'ejs');


// res.render('contact.ejs');
app.get('/', (req, res) => {

  let siteName = "Adidas"
  let searchText = " Search Now"
   let arr = [ "hey" ,45 , 55]
  res.render("index", { siteName: siteName , searchText :searchText ,arr})
})


app.get('/blog/:slug', (req, res) => {

  let blogTitle = "Adidas Why and when"
  let blogcontent = " Tis a very good content"
  res.render("blogpost", { blogTitle:blogTitle, blogcontent: blogcontent})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

