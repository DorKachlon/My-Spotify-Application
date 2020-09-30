const { Router } = require("express");
const verify = require("./verifyToken");
const router = Router();

router.use("/songs", verify, require("./songs"));
router.use("/albums", verify, require("./albums"));
router.use("/artists", verify, require("./artists"));
router.use("/playlists", verify, require("./playlists"));
router.use("/interactions", verify, require("./interactions"));
router.use("/search", verify, require("./search"));
router.use("/auth", require("./authentication"));

module.exports = router;
