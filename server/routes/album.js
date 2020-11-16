const express = require("express");
const albumRouter = express.Router();
const mysqlCon = require("../connection");
const { postReq, putReq, deleteReq } = require("../helpFunctions");

//GET REQUEST
albumRouter.get("/", (req, res) => {
    let sql = `SELECT * FROM Album;`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
albumRouter.get("/:id", (req, res) => {
    // SpecificID(req, res, "album", "album_id");
    let sql = `SELECT album.*, artist.name AS artist_name, artist.cover_img AS artist_cover_img FROM album 
    INNER JOIN artist 
    ON album.artist_id = artist.artist_id
    WHERE album_id = ${req.params.id}`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
albumRouter.get("/songs/:idAlbum", (req, res) => {
    let sql = `SELECT song.* ,artist.name AS artist_name FROM song
    INNER JOIN artist 
    ON song.artist_id = artist.artist_id
    WHERE album_id = ${req.params.idAlbum}
    order by track_number;`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
albumRouter.get("/search/:word", (req, res) => {
    let sql = `SELECT * FROM album
    WHERE album.name like "%${req.params.word}%";`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
//POST REQUEST
albumRouter.post("/", (req, res) => {
    postReq(res, req, "album");
});

//PUT REQUEST
albumRouter.put("/:id", async (req, res) => {
    putReq(req, res, "album");
});

//DELETE REQUEST
albumRouter.delete("/:id", async (req, res) => {
    deleteReq(req, res, "album");
});

//EXPORT
module.exports = albumRouter;
