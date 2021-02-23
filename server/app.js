const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan("tiny"));

const path = require("path");

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "..", "client/build")));
// Anything that doesn't match the above, send back index.html

app.use("/api/", require("./api"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/client/build/index.html"));
});
module.exports = app;
