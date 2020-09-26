const { Song, Artist, Album } = require("../models");
const { Op } = require("sequelize");
const { Router } = require("express");
const router = Router();

//GET REQUEST
router.get("/", async (req, res) => {
    const allSongs = await Song.findAll();
    res.json(allSongs);
});
router.get("/:songId", async (req, res) => {
    const song = await Song.findByPk(req.params.songId, {
        include: [
            { model: Artist, attributes: ["coverImg", "name"] },
            { model: Album, attributes: ["coverImg", "name","releasedAt"] },
        ],
    });
    res.json(song);
});
router.get("/search/:word", async (req, res) => {
    const songs = await Song.findAll({
        where: {
            name: {
                [Op.substring]: req.params.word,
            },
        },
    });
    res.json(songs);
});
//POST REQUEST
router.post("/", async (req, res) => {
    const {
        id,
        name,
        youtubeLink,
        albumId,
        artistId,
        length,
        trackNumber,
        lyrics,
    } = req.body;
    const obj = {
        id,
        name,
        youtubeLink,
        albumId,
        artistId,
        length,
        trackNumber,
        lyrics,
    };
    const newSong = await Song.create(obj);
    res.json(newSong);
});
//PUT REQUEST
router.put("/:songId", async (req, res) => {
    await Song.update(req.body, {
        where: {
            id: req.params.songId,
        },
    });
    res.json(`song id ${req.params.songId} updated`);
});

//DELETE REQUEST
router.delete("/:songId", async (req, res) => {
    await Song.destroy({
        where: {
            id: req.params.songId,
        },
    });
    res.json(`song id ${req.params.songId} deleted`);
});
//DELETE-HARD_DELETION REQUEST
router.delete("/:songId/hardDeletion", async (req, res) => {
    await Song.destroy({
        where: {
            id: req.params.songId,
        },
        force: true,
    });
    res.json(`song id ${req.params.songId} deleted forever !`);
});
//EXPORT
module.exports = router;
