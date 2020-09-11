const mysql = require("mysql");
const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const mysqlCon = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "spotify",
    multipleStatements: true,
});

mysqlCon.connect(function (err) {
    if (err) {
        console.log(
            `try to connect ${process.env.USER} ${process.env.PASSWORD} and fail`
        );
        throw err;
    }
    console.log("Connected to DB!");
});

//GET
app.get("/song/:id", (req, res) => {
    SpecificID(req, res, "song", "id", "SELECT *");
});

app.get("/album/:id", (req, res) => {
    SpecificID(req, res, "album", "album_id", "SELECT *");
});

app.get("/artist/:id", (req, res) => {
    SpecificID(req, res, "artist", "artist_id", "SELECT *");
});

app.get("/playlist/:id", (req, res) => {
    SpecificID(req, res, "playlist", "playlist_id", "SELECT *");
});

function SpecificID(req, res, album, column, action) {
    let sql = `${action} FROM ${album} WHERE ${column} = ${req.params.id}`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Post fetched...");
        res.send(result);
    });
}

//POST
app.post("/song", (req, res) => {
    postReq(res, req, "song");
});

app.post("/album", (req, res) => {
    postReq(res, req, "album");
});

app.post("/playlist", (req, res) => {
    postReq(res, req, "playlist");
});

app.post("/artist", (req, res) => {
    postReq(res, req, "artist");
});

function postReq(req, res, table) {
    let sql = `INSERT INTO ${table} SET ?`;
    mysqlCon.query(sql, req.body, (err, result) => {
        if (err) {
            res.send(err.message);
            throw err;
        }
        res.send(result);
    });
}

//PUT
app.put("/song/:id", async (req, res) => {
    putReq(req, res, "song");
});
app.put("/artist/:id", async (req, res) => {
    putReq(req, res, "artist");
});
app.put("/album/:id", async (req, res) => {
    putReq(req, res, "album");
});
app.put("/playlist/:id", async (req, res) => {
    putReq(req, res, "playlist");
});

function putReq(req, res, table) {
    let sql = `UPDATE ${table} SET`;
    keyArray = Object.keys(req.body);
    for (const key of keyArray) {
        sql += ` ${key}='${req.body[key]}'`;
    }
    sql += `WHERE ${table}_id=${req.params.id}`;
    mysqlCon.query(sql, (error, results) => {
        if (error) {
            res.send(err.message);
            throw error;
        }
        res.send(results);
    });
}

//DELETE
app.delete("/song/:id", async (req, res) => {
    deleteReq(req, res, "song");
});
app.delete("/artist/:id", async (req, res) => {
    deleteReq(req, res, "artist");
});
app.delete("/album/:id", async (req, res) => {
    deleteReq(req, res, "album");
});
app.delete("/playlist/:id", async (req, res) => {
    deleteReq(req, res, "playlist");
});

function deleteReq(req, res, table) {
    mysqlCon.query(
        `DELETE FROM ${table} WHERE ${table}_id = ${req.params.id}`,
        (error, results) => {
            if (error) {
                res.send(err.message);
                throw error;
            }
            res.send(results);
        }
    );
}
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
