const express = require('express')
let app = express()

/* App.get pega a rota sendo sempre criada apartir de uma '/'. apos isso inserir quais ações serão feitas, contendo pelo menos uma requisição e uma resposta para o úsuario.
abra uma Arrow Function executar os comandos   
*/
app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.get('/cadastro', (req, res) => {
    res.send('Tela de cadastro')
})

app.get('/perfil', (req, res) => {
    res.send('Tela de Perfis')
})

//Diz qual a porta o servidor vai rodar
app.listen(8080, () => {
    console.log('Rodando no endereço http://localhost:8080')
})