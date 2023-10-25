const express = require('express');
const app = express();
const cors = require('cors');   
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES ADMIN
//#region 

//#region USUARIOS
//Create a user 
app.post("/create_user", async (req, res) =>
{

    try {

       const username = req.body.username; //  const {username} = req.body; ----> son lo mismo
       const user_role = req.body.user_role;

       const newUser = await pool.query("INSERT INTO users (username, user_role) VALUES($1, $2) RETURNING *",[username, user_role]);

       res.json(newUser.rows[0])
    } catch (error) {
        console.error(error)
    }

})

//Get all users

app.get("/users", async (req,res) =>
{

    try {

        const getAll = await pool.query("SELECT * FROM users");
        res.json(getAll.rows);
        
    } catch (error) {
        console.error(error)
    }
})

//Get a user

app.get("/users/:id", async (req,res) =>
{

    try {

        const {id} = req.params;
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1",[id])
        res.json(user.rows[0]);
        
    } catch (error) {
        console.error(error)
    }

})

//Update a user

app.put("/users/:id", async (req,res)=>
{
    try {
        
        const {id} = req.params;
        const {username} = req.body;
        const {user_role} = req.body;
        const UpdateUser = await pool.query("UPDATE users SET username = $1, user_role = $2 WHERE user_id = $3",[username, user_role, id])
        res.json("Usuario actualizado");

    } catch (error) {
        console.error(error)
    }
})

//Delete a user

app.delete("/delete/:id", async (req, res) =>
{

    try {

        const {id} = req.params;
        const DelUser = await pool.query("DELETE FROM users WHERE user_id = $1", [id]);
        res.json("User deleted!")
        
    } catch (error) {
        console.error(error)
    }

})
    //#endregion USUARIOS

//#region PRODUCTOS
        //Create a product 
app.post("/create_product", async (req, res) =>
{

    try {

       const product = req.body.product; //  const {username} = req.body; ----> son lo mismo
       const price = req.body.price;

       const newProduct = await pool.query("INSERT INTO products (product, price) VALUES($1, $2) RETURNING *",[product, price]);

       res.json(newProduct.rows[0])
    } catch (error) {
        console.error(error)
    }

})

//Get all products

app.get("/products", async (req,res) =>
{

    try {

        const getAll = await pool.query("SELECT * FROM products");
        res.json(getAll.rows);
        
    } catch (error) {
        console.error(error)
    }
})

//Get a product

app.get("/products/:id", async (req,res) =>
{

    try {

        const {id} = req.params;
        const user = await pool.query("SELECT * FROM products WHERE product_id = $1",[id])
        res.json(user.rows[0]);
        
    } catch (error) {
        console.error(error)
    }

})

//Update a product

app.put("/products/:id", async (req,res)=>
{
    try {
        
        const {id} = req.params;
        const {product} = req.body;
        const {price} = req.body;
        const UpdateUser = await pool.query("UPDATE products SET product = $1, price = $2 WHERE product_id = $3",[product, price, id])
        res.json("producto actualizado");

    } catch (error) {
        console.error(error)
    }
})

//Delete a product

app.delete("/delete_product/:id", async (req, res) =>
{

    try {

        const {id} = req.params;
        const DelUser = await pool.query("DELETE FROM products WHERE product_id = $1", [id]);
        res.json("product deleted!")
        
    } catch (error) {
        console.error(error)
    }

})
    //#endregion PRODUCTOS
//#endregion

//ROUTES USER
//#region 
//Create an order 
app.post("/create_order", async (req, res) =>
{

    try {

       //  const {username} = req.body; ----> son lo mismo
       const {product} = req.body;
       const {amount} = req.body;
       const {price} = req.body;
       const total = parseInt(amount) * parseInt(price);


       const newSell = await pool.query("INSERT INTO sellings (product, amount, price, total) VALUES($1, $2, $3, $4) RETURNING *",
       [
         product, amount, price, total
       ]);

       res.json(newSell.rows[0])
    } catch (error) {
        console.error(error)
    }

})


//#endregion

app.listen(5000, ()=>
{
    console.log("El servidor está corriendo en el puerto 5000")
});