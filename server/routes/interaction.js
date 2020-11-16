const express = require("express");
const interactionRouter = express.Router();
const mysqlCon = require("../connection");

//GET REQUEST
interactionRouter.get("/top_songs/", (req, res) => {
    const sql = `
    SELECT song.song_id, song.name, song.artist_id,song.album_id, song.youtube_link,song.length,song.lyrics,song.created_at,artist.name AS artist_name, album.name AS album_name,album.cover_img,SUM(play_count) AS counter_player FROM interactions_by_song
    INNER JOIN song 
        ON interactions_by_song.song_id = song.song_id
    INNER JOIN artist 
        ON song.artist_id = artist.artist_id
    INNER JOIN album 
        ON song.album_id = album.album_id
    GROUP BY interactions_by_song.song_id
    ORDER BY counter_player desc
    LIMIT 20;`;
    mysqlCon.query(sql, (err, result) => {
        if (err) {
            res.send(err.message);
            throw err;
        }
        res.send(result);
    });
});

interactionRouter.get("/top_artists/", (req, res) => {
    const sql = `
    SELECT user_artist.artist_id, COUNT(user_artist.artist_id) AS counter_subscribes, artist.name, artist.cover_img, artist.upload_at FROM user_artist
    INNER JOIN artist 
        ON user_artist.artist_id = artist.artist_id
    GROUP BY user_artist.artist_id
    ORDER BY counter_subscribes desc
    LIMIT 20;`;
    mysqlCon.query(sql, (err, result) => {
        if (err) {
            res.send(err.message);
            throw err;
        }
        res.send(result);
    });
});
interactionRouter.get("/top_albums/", (req, res) => {
    const sql = `
    SELECT interactions_by_album.album_id, album.name, album.cover_img, album.created_at ,artist.name AS artist_name,SUM(interactions_by_album.play_count) AS counter_player FROM interactions_by_album
    INNER JOIN album 
        ON interactions_by_album.album_id = album.album_id
    INNER JOIN artist 
        ON album.artist_id = artist.artist_id
    GROUP BY interactions_by_album.album_id
    ORDER BY counter_player desc
    LIMIT 20;`;
    mysqlCon.query(sql, (err, result) => {
        if (err) {
            res.send(err.message);
            throw err;
        }
        res.send(result);
    });
});
interactionRouter.get("/top_playlists/", (req, res) => {
    const sql = `
    SELECT interactions_by_playlist.playlist_id, playlist.name, playlist.cover_img, playlist.created_at ,SUM(interactions_by_playlist.play_count) AS counter_player FROM interactions_by_playlist
    INNER JOIN playlist 
        ON interactions_by_playlist.playlist_id = playlist.playlist_id
    GROUP BY interactions_by_playlist.playlist_id
    ORDER BY counter_player desc
    LIMIT 20;`;
    mysqlCon.query(sql, (err, result) => {
        if (err) {
            res.send(err.message);
            throw err;
        }
        res.send(result);
    });
});

//EXPORT
module.exports = interactionRouter;
