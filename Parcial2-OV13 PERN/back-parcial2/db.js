const {Pool} = require('pg');

const db = new Pool({
    user: "postgres",
    password:"oswal123",
    host:"localhost",
    port:"5432",
    database:"parcial-2"
})

module.exports = db