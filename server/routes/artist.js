const express = require("express");
const artistRouter = express.Router();
const mysqlCon = require("../connection");
const { specificID, postReq, putReq, deleteReq } = require("../helpFunctions");

//GET REQUEST
artistRouter.get("/:id", (req, res) => {
    specificID(req, res, "artist", "artist_id");
});
artistRouter.get("/songs/:idArtist", (req, res) => {
    let sql = `SELECT song.* ,artist.name AS artist_name, album.cover_img AS cover_img ,album.name AS album_name FROM song
    INNER JOIN artist 
    ON song.artist_id = artist.artist_id
        INNER JOIN album 
    ON song.album_id = album.album_id
    WHERE song.artist_id = ${req.params.idArtist}
    order by created_at desc;`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Post fetched...");
        res.send(result);
    });
});
artistRouter.get("/search/:word", (req, res) => {
    let sql = `SELECT * FROM artist
    WHERE artist.name like "%${req.params.word}%";`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Post fetched...");
        res.send(result);
    });
});
artistRouter.get("/albums/:idArtist", (req, res) => {
    let sql = `SELECT album.* ,artist.name AS artist_name FROM album
    INNER JOIN artist 
    ON album.artist_id = artist.artist_id
    WHERE album.artist_id = ${req.params.idArtist}
    order by created_at desc;`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Post fetched...");
        res.send(result);
    });
});

//POST REQUEST
artistRouter.post("/", (req, res) => {
    postReq(res, req, "artist");
});

//PUT REQUEST
artistRouter.put("/:id", async (req, res) => {
    putReq(req, res, "artist");
});

//DELETE REQUEST
artistRouter.delete("/:id", async (req, res) => {
    deleteReq(req, res, "artist");
});

//EXPORT
module.exports = artistRouter;
