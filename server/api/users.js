const { UserSong, UserArtist } = require("../models");
const { Router } = require("express");
const router = Router();

//GET REQUEST
router.get("/like-song/:songId", async (req, res) => {
  try {
    const likeOrNot = await UserSong.findAll({
      where: {
        userId: req.user.userId,
        songId: req.params.songId,
      },
    });
    if (likeOrNot.length > 0) res.status(200).json({ message: "like" });
    else res.status(200).json({ message: "notLike" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Cannot process request" });
  }
});
router.get("/subscribe/:artistId", async (req, res) => {
  try {
    const subscribe = await UserArtist.findAll({
      where: {
        userId: req.user.userId,
        artistId: req.params.artistId,
      },
    });
    if (subscribe.length > 0) res.status(200).json({ message: "subscribed" });
    else res.status(200).json({ message: "notSubscribed" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Cannot process request" });
  }
});
//POST REQUEST
router.post("/like-song/:songId", async (req, res) => {
  try {
    const songId = req.params.songId;
    const userId = req.user.userId;
    const obj = {
      userId,
      songId,
    };
    const newUserSong = await UserSong.create(obj);
    res.json(newUserSong);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Cannot process request" });
  }
});
router.post("/subscribe/:artistId", async (req, res) => {
  try {
    const artistId = req.params.artistId;
    const userId = req.user.userId;
    const obj = {
      userId,
      artistId,
    };
    const newUserArtist = await UserArtist.create(obj);
    res.json(newUserArtist);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Cannot process request" });
  }
});

//PUT REQUEST

//DELETE REQUEST
router.delete("/like-song/:songId", async (req, res) => {
  await UserSong.destroy({
    where: {
      userId: req.user.userId,
      songId: req.params.songId,
    },
  });
  res.json(`unlike done`);
});
router.delete("/subscribe/:artistId", async (req, res) => {
  await UserArtist.destroy({
    where: {
      userId: req.user.userId,
      artistId: req.params.artistId,
    },
  });
  res.json(`unsubscribe done`);
});
//DELETE-HARD_DELETION REQUEST

//EXPORT
module.exports = router;
