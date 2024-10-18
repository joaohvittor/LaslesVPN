// app.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Cria uma instância do Express
const app = express();

// Middleware para parsing de JSON
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'seu_banco_de_dados'
});

// Conexão com o banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dados como ID ' + db.threadId);
});

// Rota para obter todos os usuários
app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao consultar o banco de dados.' });
        }
        res.json(results);
    });
});

// Rota para adicionar um novo usuário
app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao inserir no banco de dados.' });
        }
        res.status(201).json({ id: results.insertId, nome, email });
    });
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
