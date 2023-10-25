const Pool = require("pg").Pool

const pool = new Pool(
    {
        user: "postgres",
        password:"dedito123",
        host: "localhost",
        port: "5432",
        database: "restaurante_db"
    }
);

module.exports = pool;