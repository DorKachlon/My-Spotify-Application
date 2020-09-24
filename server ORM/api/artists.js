const { Artist } = require("../models");
const { Router } = require("express");

const router = Router();
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
    res.json(artist);
});
router.get("/:artistId/songs", async (req, res) => {
    const artist = await Artist.findByPk(req.params.artistId);
    const songs = await artist.getSongs();
    return res.json(songs);
});

//EXPORT
module.exports = router;
