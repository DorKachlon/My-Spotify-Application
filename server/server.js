const express = require("express");
const app = express();
require("dotenv").config();

const song = require("./routes/song");
const album = require("./routes/album");
const artist = require("./routes/artist");
const playlist = require("./routes/playlist");
const interaction = require("./routes/interaction");
const search = require("./routes/search");

app.use(express.json());

app.use("/song", song);
app.use("/album", album);
app.use("/artist", artist);
app.use("/playlist", playlist);
app.use("/interaction", interaction);
app.use("/search", search);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
