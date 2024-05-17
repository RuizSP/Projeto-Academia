const pool = require('../../db');
const User = require('../Usuario')

class UsuarioDao
{
    async findAll() 
    {
        try {
            const result = await pool.query('SELECT * FROM usuarios');
            return result.rows.map(row => new User(row.id,row.name, row.sobrenome, row.cpf, row.nasc, row.password, row.phone, row.email));
        } catch (err) {
            throw new Error('Erro ao buscar usuários');
        }
    }


    async create(name, sobrenome, cpf, nasc, password, phone, email)
    {
        try {
            const queryText = 'INSERT INTO usuarios (name, sobrenome, cpf, nasc, password, phone, email) VALUES ($1,$2, $3,$4,$5,$6,$7)'
            await pool.query(queryText, [name, sobrenome, cpf, nasc, password, phone, email])
        } catch (error) {
            res.status(500).json({ message: 'Erro ao cadastrar usuário. Tente novamente.' });
            throw new Error('Erro ao cadastrar usuário:', error);
           
        }


    }
}

module.exports = new UsuarioDao();