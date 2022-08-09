const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // retornará Hello World!
  res.send('Hello World!')
})

app.get('/google', (req, res) => {
  // retornará http status 302 e redicionará o browser para o Google
  res.redirect('http://www.google.com');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})