const { Router } = require("express");
const router = Router();
const { User, Refresh_token } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation, tokenValidation } = require("../validation");
const verifyToken = require("./verifyToken");
const mailer = require("../communicator");

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
    mailer.sendHTMLMail(
      req.body.email,
      "Validate your E-mail",
      ` <div style="background-color:green;width:100%;height:500px;">
            <p>
               Conregulation Challenger, and welcome! You are now offically a part of challenge me
              community! To start challenging your friends and undertake challenges
               yourself, click on the buttom bellow.
            </p>
             <form action="${process.env.IP_ADDRESS}/auth">
                  <input name="token" value="${mailedToken}" type="hidden">
                  <button style="width: 200px; background-color: purple; color: white;">Get Schwifty</button>
             </form>
        </div>`,
      (error, info) => {
        if (error) {
          console.error(error.message);
          res.status(400).json({ message: "Email Invalid" });
        } else {
          console.log(info);
          res.json({ message: "Waiting For Mail Validation" });
        }
      }
    );
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
