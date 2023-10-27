const Pool = require("pg").Pool;

const conex = new Pool({
	user: "postgres",
	password: "1234",
	host: "localhost",
	port: "5432",
	database: "restaurante",
});

module.exports = conex;
 