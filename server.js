const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 8084

app.use(express.static(__dirname + '/dist/teste-heroku'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/teste-heroku/index.html')
})

app.listen(PORT, () =>{
    console.log('SERVIDOR INICIADO NA PORTA ' + PORT);
})