require("dotenv").config();
const jwt = require("jsonwebtoken");

function generateToken(currentUser) {
  const infoForCookie = {
    userId: currentUser.id,
    userName: currentUser.userName,
  };
  return jwt.sign(infoForCookie, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "900s",
  });
}

module.exports = {
  generateToken,
};
