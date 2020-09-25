const { Playlist, Album, Song, Artist, Playlist_song } = require("../models");
const { Op } = require("sequelize");
const { Router } = require("express");
const router = Router();

//GET REQUEST
router.get("/", async (req, res) => {
    const allplaylists = await Playlist.findAll();
    res.json(allplaylists);
});
router.get("/:playlistId", async (req, res) => {
    const playlist = await Playlist.findByPk(req.params.idPlaylist);
    res.json(playlist);
});
router.get("/:playlistId/songs", async (req, res) => {
    const playlist = await Playlist_song.findAll({
        where: {
            playlistId: req.params.playlistId,
        },
        attributes: ["playlistId"],
        include: [
            {
                model: Song,
                include: [
                    { model: Album, attributes: ["coverImg"] },
                    { model: Artist, attributes: ["name"] },
                ],
            },
        ],
    });
    res.json(playlist);
});
router.get("/search/:word", async (req, res) => {
    const playlists = await Playlist.findAll({
        where: {
            name: {
                [Op.substring]: req.params.word,
            },
        },
    });
    res.json(playlists);
});

//POST REQUEST
router.post("/", async (req, res) => {
    const { id, name, coverImg } = req.body;
    const obj = {
        id,
        name,
        coverImg,
        releasedAt: new Date(),
    };
    const newPlaylist = await Playlist.create(obj);
    res.json(newPlaylist);
});

//PUT REQUEST
router.put("/:playlistId", async (req, res) => {
    await Playlist.update(req.body, {
        where: {
            id: req.params.playlistId,
        },
    });
    res.json(`playlist id ${req.params.playlistId} updated`);
});

//DELETE REQUEST
router.delete("/:playlistId", async (req, res) => {
    await Playlist.destroy({
        where: {
            id: req.params.playlistId,
        },
    });
    res.json(`playlist id ${req.params.playlistId} deleted`);
});

//DELETE-HARD_DELETION REQUEST
router.delete("/:playlistId/hardDeletion", async (req, res) => {
    await Playlist.destroy({
        where: {
            id: req.params.playlistId,
        },
        force: true,
    });
    res.json(`playlist id ${req.params.playlistId} deleted forever !`);
});

//EXPORT
module.exports = router;
