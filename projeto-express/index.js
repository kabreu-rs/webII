const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'formulario.html'));
});


app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;
    novoUsuario.id = Date.now(); 
    res.json(novoUsuario);
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
