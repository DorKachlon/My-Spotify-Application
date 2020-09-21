const express = require("express");
const searchRouter = express.Router();
const mysqlCon = require("../connection");

//GET REQUEST
searchRouter.get("/", (req, res) => {
    let sql = ` SELECT artist.name FROM artist
    WHERE artist.name like "%${req.query.params}%"
    UNION
    SELECT song.name FROM song
    WHERE song.name like "%${req.query.params}%"
    UNION
    SELECT album.name FROM album
    WHERE album.name like "%${req.query.params}%"
    UNION
    SELECT playlist.name FROM playlist
    WHERE playlist.name like "%${req.query.params}%";`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Post fetched...");
        res.send(result);
    });
});

//EXPORT
module.exports = searchRouter;
