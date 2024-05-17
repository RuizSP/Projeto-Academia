const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db'); 
const usuarioController = require("./controller/UsuarioController");


const app = express();
app.use(cors()); // Adicionando parênteses para invocar a função cors
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
let port = process.env.PORT || 8082;

app.get('/', (req,res) =>{
    res.send("Servidor back-End rodando")
});

app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao buscar usuários', err);
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
});

app.put('/users/:id', async(req,res) =>{
    const userId = req.params.id;
    const {name, sobrenome, cpf, nasc, phone, email} = req.body;
    try{
        const queryText = 'UPDATE usuarios SET name =$1, sobrenome=$2, cpf=$3, nasc=$4, phone=$5, email=$6 WHERE id = $7';
        await pool.query(queryText, [name, sobrenome, cpf, nasc, phone, email])
    }catch (error){
        throw new Error('Error ao atualizar usuário')
    }
})

// Adicione uma rota para cadastrar um novo usuário
app.post('/users', async (req, res) => {
    const { name, sobrenome, cpf, nasc, password, phone, email } = req.body;
    try {
        await usuarioController.create(name, sobrenome, cpf, nasc, password, phone, email);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ message: 'Erro ao cadastrar usuário. Tente novamente.' });
    }
});

app.listen(port, () => {
    console.log("Servidor backEnd rodando")
});
