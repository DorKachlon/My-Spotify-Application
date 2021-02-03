const { Router } = require("express");
const verify = require("../middleware/verifyToken");
const router = Router();

router.use("/songs", verify, require("./songs"));
router.use("/albums", verify, require("./albums"));
router.use("/artists", verify, require("./artists"));
router.use("/playlists", verify, require("./playlists"));
router.use("/interactions", verify, require("./interactions"));
router.use("/search", verify, require("./search"));
router.use("/users", verify, require("./users"));
router.use("/auth", require("./authentication"));

// router.use("/songs", require("./songs"));
// router.use("/albums", require("./albums"));
// router.use("/artists", require("./artists"));
// router.use("/playlists", require("./playlists"));
// router.use("/interactions", require("./interactions"));
// router.use("/search", require("./search"));
// router.use("/users", require("./users"));

router.use("/auth", require("./authentication"));

module.exports = router;
