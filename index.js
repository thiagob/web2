const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// relação inicial de alunos
var alunos = [
  {"id": 1, "nome": "José", "curso": "ADS"},
  {"id": 2, "nome": "Maria", "curso": "Redes"},
  {"id": 3, "nome": "João", "curso": "Administração"},
]

app.get('/', (req, res) => {
  // retornará Hello World!
  res.send('Hello World!')
})

app.get('/google', (req, res) => {
  // retornará http status 302 e redicionará o browser para o Google
  res.redirect('http://www.google.com');
})

// lista os alunos 
app.get('/api/alunos', (req, res) => {
  // adiciona o cabeçalho content-type = text/json
  res.type('json')
  // retorna relação de alunos
  res.send(JSON.stringify({
    alunos: alunos
  }));
});

// cria novo aluno
app.post('/api/alunos', (req, res) => {

  let errors = []
  
  // valida se o nome foi informado
  if (!("nome" in req.body) || req.body.nome.length == 0) {
    errors.push('Nome não informado.')
  }

  if (errors.length > 0) {
    return res.status(400).json({
      errors: errors
    });
  }

  // prepara aluno para adição
  let aluno = {
    "id": alunos.length + 1,
    "nome": req.body.nome,
    "curso": req.body.curso
  }

  // adiciona aluno no array de alunos
  alunos.push(aluno)

  // retorna aluno criado
  res.status(200).json({
    aluno: aluno
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})