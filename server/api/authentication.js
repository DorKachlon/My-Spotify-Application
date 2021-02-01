const { Router } = require("express");
const router = Router();
const { User, RefreshToken } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation, tokenValidation } = require("../validation");
const verifyToken = require("./verifyToken");
const { sendMail } = require("../sendMail");
require("dotenv").config();

// ! REGISTER
router.post("/register", async (req, res) => {
  try {
    //LETS VALIDATION THE DATA BEFORE
    const { error } = await registerValidation(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    //Checking if the user is already in the database
    const emailExist = await User.findOne({
      where: { email: req.body.email },
    });
    if (emailExist) return res.status(400).send("Email already exists");

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new user
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      isAdmin: false,
      preferenced: [{}],
      rememberToken: false,
    };
    const mailedToken = jwt.sign(newUser, process.env.EMAIL_TOKEN_SECRET);
    sendMail(req.body.email, mailedToken, res);

    // ! const savedUser = await User.create(obj);
    // ! //Create and assign a token
    // ! const token = jwt.sign({ id: savedUser.id }, process.env.TOKEN_SECRET);
    // ! res.cookie("token", token);
    // ! res.header("auth-token", token);
    // ! res.send({ user: savedUser.id });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: "Cannot process request" });
  }
});

// ! create-user
router.post("/create-user", (req, res) => {
  try {
    const { error } = tokenValidation(req.body);
    if (error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: "Don't mess with us" });
    }
    jwt.verify(req.body.token, process.env.EMAIL_TOKEN_SECRET, async (error, decoded) => {
      if (error) {
        console.error(error.message);
        return res.status(403).json({ message: "Invalid Token" });
      }
      delete decoded.iat;
      delete decoded.exp;

      const checkUser = await userIsExist(decoded.email);
      if (checkUser) return res.status(201).json({ message: "user name already exists" });
      await User.create(decoded);
      res.status(201).json({ message: "Register Success" });
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: "Cannot process request" });
  }
});

// ! LOGIN
router.post("/login", async (req, res) => {
  try {
    //LETS VALIDATION THE DATA BEFORE
    const { error } = loginValidation(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    //Checking if the email exists
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(400).send("Email or password is wrong"); //here its if user doesnt exsit

    //Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Email or password is wrong");

    //Create and assign a token
    const expired = req.body.rememberMe ? "365 days" : "24h";
    const infoForCookie = {
      userId: user.id,
      email: user.email,
    };
    const refreshToken = jwt.sign(infoForCookie, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: expired,
    });
    const accessToken = jwt.sign(infoForCookie, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "900s",
    });
    const isTokenExist = await RefreshToken.findOne({
      where: {
        email: user.email,
      },
    });
    if (!isTokenExist) {
      await RefreshToken.create({
        email: user.email,
        token: refreshToken,
      });
    } else {
      await RefreshToken.update(
        { token: refreshToken },
        {
          where: {
            email: user.email,
          },
        }
      );
    }
    res.cookie("name", user.name);
    res.cookie("email", user.email);
    res.cookie("accessToken", accessToken);
    res.cookie("refreshToken", refreshToken);
    res.send("logged in !");
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: "Cannot process request" });
  }
});

// ! LOGOUT
router.post("/logout", async (req, res) => {
  // Joi Validation
  try {
    const { error } = tokenValidation(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const result = await RefreshToken.destroy({
      where: {
        token: req.body.token,
      },
    });
    if (!result) return res.status(400).json({ message: "Refresh Token is required" });
    res.json({ message: "User Logged Out Successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: "Cannot process request" });
  }
});

//! Get new access token
router.post("/token", async (req, res) => {
  try {
    // Joi Validation
    const { error } = tokenValidation(req.body);
    if (error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    const refreshToken = req.body.token;
    const validRefreshToken = await RefreshToken.findOne({
      where: {
        token: refreshToken,
      },
    });
    if (!validRefreshToken) return res.status(403).json({ message: "Invalid Refresh Token" });
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, decoded) => {
      if (error) {
        console.error(error.message);
        return res.status(403).json({ message: "Invalid Refresh Token" });
      }
      delete decoded.iat;
      delete decoded.exp;
      const accessToken = jwt.sign(decoded, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "900s" });
      res.cookie("accessToken", accessToken);
      res.json({ message: "token updated" });
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: "Cannot process request" });
  }
});

// ! validateToken
router.get("/validateToken", verifyToken, (req, res) => {
  res.json({ valid: true });
});

// ! check in the DateBase if user is in the system
async function userIsExist(email) {
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      return user.dataValues;
    }
    return false;
  } catch (error) {
    console.error(error.message);
  }
}
module.exports = router;
