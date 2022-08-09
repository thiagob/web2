const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  html = `
  <html>
    <head>
      <script src="jquery-3.6.0.min.js"></script>
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
  </html>
  `

  res.end(html)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})