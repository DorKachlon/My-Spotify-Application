const { Router } = require("express");
const router = Router();
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
    //LETS VALIDATION THE DATA BEFORE
    registerValidation(req.body, res);

    //Checking if the user is already in the database
    const emailExist = await User.findOne({ where: { email: req.body.email } });
    if (emailExist) res.status(400).send("Email already exists");

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
        res.send({ user: savedUser.id });
    } catch (err) {
        res.status(400).send(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    //LETS VALIDATION THE DATA BEFORE
    loginValidation(req.body, res);
    // const  {error}  = loginValidation(req.body);
    // console.log(error);
    // if (error) return res.status(400).send(error.details[0].message);

    //Checking if the email exists
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log(user);
    if (!user) res.status(400).send("Email or password is wrong"); //here its if user doesnt exsit

    //Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) res.status(400).send("Email or password is wrong");

    //Create and assign a token
    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
    res.cookie("token", token);
    res.header("auth-token", token);
    res.send("logged in !" + token);
});
module.exports = router;
