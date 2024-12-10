const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Importando o pacote CORS

const app = express();

// Habilita o CORS para permitir requisições de diferentes origens
app.use(cors());

app.use(express.json());

app.post('/save-response', (req, res) => {
    const { nome, aceito } = req.body;

    // Salva os dados em um arquivo local
    const data = `Nome: ${nome}, Aceitou: ${aceito}\n`;
    fs.appendFileSync('responses.txt', data);

    res.status(200).send('Resposta salva com sucesso!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
