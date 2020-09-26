const {
    Interactions_by_song,
    Interactions_by_playlist,
    Interactions_by_album,
    sequelize,
    Song,
    Artist,
    Album,
} = require("../models");
const { Op } = require("sequelize");
const { Router } = require("express");
const router = Router();

//GET REQUEST
router.get("/top_songs", async (req, res) => {
    const allSongs = await Interactions_by_song.findAll({
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
    res.json(allSongs);
});

//EXPORT
module.exports = router;
