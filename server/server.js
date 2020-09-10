const mysql = require("mysql");
const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "spotify",
    multipleStatements: true,
});

con.connect(function (err) {
    if (err) {
        console.log(
            `try to connect ${process.env.USER} ${process.env.PASSWORD} and fail`
        );
        throw err;
    }
    console.log("Connected to DB!");
});
//correct
app.get("/user/", (req, res) => {
    let sql = "SELECT * FROM user";
    let query = con.query(sql, (err, results) => {
        if (err) throw err;
        console.log("Post fetched...");
        res.send(results);
    });
});

//A song with a specific ID
app.get("/song/:id", (req, res) => {
    GetSpecificID(req,res,"song","id", "SELECT *");
});

//A artist with a specific ID
app.get("/album/:id", (req, res) => {
    GetSpecificID(req,res,"album","album_id", "SELECT *");
});

//A album with a specific ID
app.get("/artist/:id", (req, res) => {
    GetSpecificID(req,res,"artist","artist_id", "SELECT *");
});
//A playlist with a specific ID
app.get("/playlist/:id", (req, res) => {
    GetSpecificID(req,res,"playlist","playlist_id", "SELECT *");
});


function SpecificID(req,res,album, column, action){
    let sql = `${action} FROM ${album} WHERE ${column} = ${req.params.id}`;
    let query = con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Post fetched...");
        res.send(result);
    });
}


app.get("/song", (req, res) => {
    let post = req.body;
    let sql = "INSERT INTO song VALUES ?";
    let query = con.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post 1 added...");
    });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
