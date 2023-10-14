const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'sol123',
    database: 'tienda',
    port: '5432'
});

module.exports = pool;