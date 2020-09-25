const { Album, Artist } = require("../models");
const { Op } = require("sequelize");
const { Router } = require("express");
const router = Router();

//GET REQUEST
router.get("/", async (req, res) => {
    const allAlbums = await Album.findAll();
    res.json(allAlbums);
});
router.get("/:albumId", async (req, res) => {
    const album = await Album.findByPk(req.params.albumId, {
        include: { model: Artist, attributes: ["name", "coverImg"] },
    });
    res.json(album);
});
router.get("/:albumId/songs", async (req, res) => {
    const album = await Album.findByPk(req.params.albumId);
    const songs = await album.getSongs({
        include: { model: Artist, attributes: ["name", "coverImg"] },
        order: [["trackNumber", "ASC"]],
    });
    res.json(songs);
});
router.get("/search/:word", async (req, res) => {
    const albums = await Album.findAll({
        where: {
            name: {
                [Op.substring]: req.params.word,
            },
        },
    });
    res.json(albums);
});
//POST REQUEST
router.post("/", async (req, res) => {
    const { id, name, artistId, coverImg, releasedAt } = req.body;
    const obj = {
        id,
        name,
        artistId,
        coverImg,
        releasedAt,
    };
    const newArtist = await Album.create(obj);
    res.json(newArtist);
});
//PUT REQUEST
router.put("/:albumId", async (req, res) => {
    await Album.update(req.body, {
        where: {
            id: req.params.albumId,
        },
    });
    res.json(`album id ${req.params.albumId} updated`);
});

//DELETE REQUEST
router.delete("/:albumId", async (req, res) => {
    await Album.destroy({
        where: {
            id: req.params.albumId,
        },
    });
    res.json(`album id ${req.params.albumId} deleted`);
});
//DELETE-HARD_DELETION REQUEST
router.delete("/:albumId/hardDeletion", async (req, res) => {
    await Album.destroy({
        where: {
            id: req.params.albumId,
        },
        force: true,
    });
    res.json(`album id ${req.params.albumId} deleted forever !`);
});
//EXPORT
module.exports = router;
