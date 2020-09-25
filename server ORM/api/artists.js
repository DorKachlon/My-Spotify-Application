const { Artist, Song, Album } = require("../models");
const { Op } = require("sequelize");
const { Router } = require("express");
const router = Router();

//GET REQUEST
router.get("/", async (req, res) => {
    const allArtists = await Artist.findAll();
    res.json(allArtists);
});
router.get("/:artistId", async (req, res) => {
    const artist = await Artist.findByPk(req.params.artistId);
    res.json(artist);
});
router.get("/:artistId/songs", async (req, res) => {
    const artist = await Artist.findByPk(req.params.artistId);
    const songs = await artist.getSongs({
        include: [
            { model: Album, attributes: ["name", "coverImg"] },
            { model: Artist, attributes: ["name", "coverImg"] },
        ],
    });
    res.json(songs);
});
router.get("/:artistId/albums", async (req, res) => {
    const artist = await Artist.findByPk(req.params.artistId);
    const albums = await artist.getAlbums({
        include: [{ model: Artist, attributes: ["name"] }],
        order: [["releasedAt", "DESC"]],
    });
    res.json(albums);
});
router.get("/search/:word", async (req, res) => {
    const artists = await Artist.findAll({
        where: {
            name: {
                [Op.substring]: req.params.word,
            },
        },
    });
    res.json(artists);
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
    const newArtist = await Artist.create(obj);
    res.json(newArtist);
});

//PUT REQUEST
router.put("/:artistId", async (req, res) => {
    await Artist.update(req.body, {
        where: {
            id: req.params.artistId,
        },
    });
    res.json(`artist id ${req.params.artistId} updated`);
});
//DELETE REQUEST
router.delete("/:artistId", async (req, res) => {
    await Artist.destroy({
        where: {
            id: req.params.artistId,
        },
    });
    res.json(`artist id ${req.params.artistId} deleted`);
});
//DELETE-HARD_DELETION REQUEST
router.delete("/:artistId/hardDeletion", async (req, res) => {
    await Artist.destroy({
        where: {
            id: req.params.artistId,
        },
        force: true,
    });
    res.json(`artist id ${req.params.artistId} deleted forever !`);
});
//EXPORT
module.exports = router;
