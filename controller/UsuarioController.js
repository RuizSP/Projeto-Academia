const userDAO = require('../models/dao/UsuarioDao');

const usuarioController = {
     async findAll(req, res){
        try {
            const users = await userDAO.findAll();
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar usuários' });
            throw new Error('Erro ao buscar usuários', err);
        }
    },

    async create(name, sobrenome, cpf, nasc, password, phone, email){
        try{
            await userDAO.create(name, sobrenome, cpf, nasc, password, phone, email);
        }catch(err){
            throw new Error("erro ao criar usuario: " + err);
        }
    },
}

// Exportando diretamente o objeto usuarioController
module.exports = usuarioController;
