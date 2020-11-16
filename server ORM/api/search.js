const { Song, Artist, Album, Playlist } = require("../models");
const { Op } = require("sequelize");
const { Router } = require("express");
const router = Router();

//http://localhost:8070/api/search?keyWord=avi
router.get("/", async (req, res) => {
    const { keyWord } = req.query;
    const options = {
        attributes: ["name"],
        where: {
            name: {
                [Op.substring]: keyWord,
            },
        },
    };
    const matchedResults = await Promise.all([
        Artist.findAll(options),
        Album.findAll(options),
        Song.findAll(options),
        Playlist.findAll(options),
    ]);
    res.json(matchedResults.flat());
});
//EXPORT
module.exports = router;
