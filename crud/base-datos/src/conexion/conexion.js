const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'wdavid13',
    database: 'crud',
    port: '5432'
});

module.exports = pool;