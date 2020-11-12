const { Router } = require("express");
const router = Router();
const { User, Refresh_token } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation, tokenValidation } = require("../validation");
const verifyToken = require("./verifyToken");

// ! REGISTER
router.post("/register", async (req, res) => {
  //LETS VALIDATION THE DATA BEFORE
  registerValidation(req.body, res);
  // const { error } = await registerValidation(req.body);
  // if (error !== "ok") {
  //     return res.status(400).send(error);
  // }
  //Checking if the user is already in the database
  const emailExist = await User.findOne({
    where: { email: req.body.email },
  });
  if (emailExist) return res.status(400).send("Email already exists");

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new user
  const obj = {
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    isAdmin: false,
    preferenced: [{}],
    rememberToken: false,
  };

  try {
    const savedUser = await User.create(obj);
    //Create and assign a token
    const token = jwt.sign({ id: savedUser.id }, process.env.TOKEN_SECRET);
    res.cookie("token", token);
    res.header("auth-token", token);
    res.send({ user: savedUser.id });
  } catch (err) {
    res.status(400).send(err);
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
    if (!user) res.status(400).send("Email or password is wrong"); //here its if user doesnt exsit

    //Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) res.status(400).send("Email or password is wrong");

    //Create and assign a token
    const expired = req.body.rememberMe ? "365 days" : "24h";
    const infoForCookie = {
      userId: user.id,
      email: user.email,
    };
    const refreshToken = jwt.sign(infoForCookie, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: expired,
    });
    const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "900s",
    });
    const isTokenExist = await Refresh_token.findOne({
      where: {
        email: user.email,
      },
    });
    if (!isTokenExist) {
      await Refresh_token.create({
        email: user.email,
        token: refreshToken,
      });
    } else {
      await Refresh_token.update(
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

    const result = await Refresh_token.destroy({
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

// ! validateToken
router.get("/validateToken", verifyToken, (req, res) => {
  res.json({ valid: true });
});

module.exports = router;
