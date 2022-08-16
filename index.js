const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


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