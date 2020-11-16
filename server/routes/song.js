const express = require("express");
const songRouter = express.Router();
const { postReq, putReq, deleteReq } = require("../helpFunctions");
const mysqlCon = require("../connection");

//GET REQUEST
songRouter.get("/", (req, res) => {
    let sql = ` SELECT * FROM playlist_song;`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
songRouter.get("/:id", (req, res) => {
    let sql = ` SELECT song.* , artist.cover_img AS artist_cover_img , album.cover_img AS album_cover_img , album.name AS album_name , artist.name AS artist_name FROM song 
            INNER JOIN artist 
    ON song.artist_id = artist.artist_id
            INNER JOIN album 
    ON song.album_id = album.album_id
        WHERE song_id = ${req.params.id}`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

songRouter.get("/search/:word", (req, res) => {
    let sql = `SELECT * FROM song
    WHERE song.name like "%${req.params.word}%";`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//POST REQUEST
songRouter.post("/", (req, res) => {
    postReq(res, req, "song");
});

//PUT REQUEST
songRouter.put("/:id", async (req, res) => {
    putReq(req, res, "song");
});

//DELETE REQUEST
songRouter.delete("/:id", async (req, res) => {
    deleteReq(req, res, "song");
});

//EXPORT
module.exports = songRouter;
