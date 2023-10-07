const http = require("node:http");

// commonJS -> modulos clásicos de node
const dittoJSON = require("./pokemon/ditto.json");

const processRequest = (req, res) => {

      



};

const server = http.createServer(processRequest);

server.listen(1234, () => {
	console.log("server listening on port http://localhost:1234");
});
