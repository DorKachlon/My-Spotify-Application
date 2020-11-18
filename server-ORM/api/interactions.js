const {
    Interactions_by_song,
    Interactions_by_playlist,
    Interactions_by_album,
    User_artist,
    sequelize,
    Song,
    Artist,
    Album,
    Playlist,
} = require("../models");
const { Router } = require("express");
const router = Router();

//GET REQUEST
//TOP SONGS
router.get("/top_songs", async (req, res) => {
    const topSongs = await Interactions_by_song.findAll({
        attributes: [
            [sequelize.fn("SUM", sequelize.col("play_count")), "counterPlayer"],
        ],
        include: [
            {
                model: Song,
                attributes: ["id", "name", "youtubeLink", "length", "lyrics"],
                include: [
                    {
                        model: Album,
                        attributes: ["id", "name", "releasedAt", "coverImg"],
                    },
                    { model: Artist, attributes: ["id", "name"] },
                ],
            },
        ],
        order: [[sequelize.fn("SUM", sequelize.col("play_count")), "DESC"]],
        group: "song_id",
        limit: 20,
    });
    res.json(topSongs);
});

//TOP ARTISTS
router.get("/top_artists", async (req, res) => {
    const topArtists = await User_artist.findAll({
        attributes: [
            [
                sequelize.fn("COUNT", sequelize.col("artist_id")),
                "counterSubscribes",
            ],
        ],
        include: [
            {
                model: Artist,
                attributes: ["id", "name", "coverImg", "releasedAt"],
            },
        ],
        order: [[sequelize.fn("COUNT", sequelize.col("artist_id")), "DESC"]],
        group: "artist_id",
        limit: 20,
    });
    res.json(topArtists);
});

//TOP ALBUMS
router.get("/top_albums", async (req, res) => {
    const topAlbums = await Interactions_by_album.findAll({
        attributes: [
            [sequelize.fn("SUM", sequelize.col("play_count")), "counterPlayer"],
        ],
        include: [
            {
                model: Album,
                attributes: ["id", "name", "coverImg", "releasedAt"],
                include: [
                    {
                        model: Artist,
                        attributes: ["id", "name"],
                    },
                    { model: Artist, attributes: ["id", "name"] },
                ],
            },
        ],
        order: [[sequelize.fn("SUM", sequelize.col("play_count")), "DESC"]],
        group: "album_id",
        limit: 20,
    });
    res.json(topAlbums);
});

//TOP PLAYLISTS
router.get("/top_playlists", async (req, res) => {
    const topAlbums = await Interactions_by_playlist.findAll({
        attributes: [
            [sequelize.fn("SUM", sequelize.col("play_count")), "counterPlayer"],
        ],
        include: [
            {
                model: Playlist,
                attributes: ["id", "name", "coverImg", "releasedAt"],
            },
        ],
        order: [[sequelize.fn("SUM", sequelize.col("play_count")), "DESC"]],
        group: "playlist_id",
        limit: 20,
    });
    res.json(topAlbums);
});

//EXPORT
module.exports = router;
