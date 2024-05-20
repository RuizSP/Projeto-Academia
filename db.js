const { Pool } = require('pg');

// Configuração da conexão com o banco de dados
const pool = new Pool({
    user: 'seuusuarioaqui',
    host: '127.0.0.1',
    database: 'seudatabaseaqui',
    password: 'suasenhaqui',
    port: 5432, // Porta padrão do PostgreSQL
});

module.exports = pool;
