const express = require("express");
const playlistRouter = express.Router();
const mysqlCon = require("../connection");
const { specificID, postReq, putReq, deleteReq } = require("../helpFunctions");

//GET REQUEST
playlistRouter.get("/:id", (req, res) => {
    let sql = `SELECT * FROM playlist;`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Post fetched...");
        res.send(result);
    });
});
playlistRouter.get("/:id", (req, res) => {
    specificID(req, res, "playlist", "playlist_id");
});
playlistRouter.get("/songs/:idPlaylist", (req, res) => {
    let sql = `SELECT playlist_song.playlist_id,song.* ,album.cover_img,artist.name AS artist_name FROM playlist_song
    INNER JOIN song 
    ON playlist_song.song_id = song.song_id
        INNER JOIN album 
        ON song.album_id = album.album_id
            INNER JOIN artist 
        ON song.artist_id = artist.artist_id
        WHERE playlist_id=${req.params.idPlaylist};`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Post fetched...");
        res.send(result);
    });
});
playlistRouter.get("/search/:word", (req, res) => {
    let sql = `SELECT * FROM playlist
    WHERE playlist.name like "%${req.params.word}%";`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Post fetched...");
        res.send(result);
    });
});

//POST REQUEST
playlistRouter.post("/", (req, res) => {
    postReq(res, req, "playlist");
});

//PUT REQUEST
playlistRouter.put("/:id", async (req, res) => {
    putReq(req, res, "playlist");
});

//DELETE REQUEST
playlistRouter.delete("/:id", async (req, res) => {
    deleteReq(req, res, "playlist");
});

//EXPORT
module.exports = playlistRouter;
