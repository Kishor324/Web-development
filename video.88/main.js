
// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World5');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const express = require('express')
const app = express()
const port = 3000
 app.use(express.static('public'))

//  app.get or spp.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World2!')
})
app.get('/about', (req, res) => {
  res.send('About us')
})
app.get('/conatct', (req, res) => {
  res.send('hello contact me!')
})

app.get('/blog/:slug', (req, res) => {
  //logic to fetch{slug} from the db
//for url :http://localhost:3000/blog/intro-to-python
  console.log(req.params)  //will output{ slug: 'intro-to-python' },
  console.log(req.query)  //will output{  },
  res.send('hello ${req.params.slug} ')
})
// app.get('/blog/intro-to-js', (req, res) => {
//   // logic to fetch into to js form db
//   res.send('hello intro-to-js!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   // logic to fetch into to js form db
//   res.send('hello intro-to-python!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
