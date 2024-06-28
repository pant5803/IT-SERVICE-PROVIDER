const User = require("../models/user-model");
const { Contact } = require("../models/contact-form-model");
const { Service } = require("../models/service-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to my home page using controllers");
  } catch (err) {
    res.status(500);
    console.log(err);
  }
};

const about = async (req, res) => {
  try {
    res.status(200).send("Welcome to my about page using controlers");
  } catch (err) {
    res.status(500);
    console.log(err);
  }
};

const register = async (req, res) => {
  try {
    // get data
    const { username, email, phone, password } = req.body;

    const userexist = await User.findOne({ email });

    if (userexist) {
      res.status(400).json({
        message: "user already registered",
        details: "mail id already registered",
      });
    } else {
      const newuser = await User.create({ username, email, phone, password });
      console.log(req.body);
      res.status(200).json({
        msg: "user registered successfully",
        token: await newuser.generateToken(),
        userId: newuser._id.toString(),
      });
    }
  } catch (err) {
    res.status(500);
    console.log("server error");
  }
};

const login = async (req, res) => {
  try {
    const enteredmail = req.body.email;
    const enteredpass = req.body.password;

    // check if mail exist in db
    const db_user = await User.findOne({ email: enteredmail });
    if (db_user) {
      // mail exist in db : now match password
      // const isvalidpassword = await bcryptjs.compare(enteredpass,db_user.password); // method 1
      const isvalidpassword = await db_user.comparepassword(enteredpass); // method 2
      if (isvalidpassword) {
        // password is also valid : login successful
        res.status(200).json({
          msg: "login successful",
          token: await db_user.generateToken(),
          userId: db_user._id.toString(),
        });
      } else {
        // password do not match
        res.status(401).json({ msg: "invalid credentials" });
      }
    } else {
      // mail not found in db
      res.status(400).json({ msg: "mail not found" });
    }
  } catch (err) {
    res.status(500).json({ msg: "internal server error", err });
  }
};

const contactformfunction = async (req, res, next) => {
  try {
    const data = req.body;
    await Contact.create(data);
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    const errobj = {
      status: 500,
      message: "Contact form error",
      details: err,
    };
    next(errobj);
  }
};

const user = async (req, res, next) => {
  try {
    const userdata = req.user;
    res.status(200).json({ msg: userdata, token: req.token });
  } catch (err) {
    err.msg = "user not found";
    next(err);
  }
};

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ msg: "no services found" });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

module.exports = {
  home,
  about,
  register,
  login,
  contactformfunction,
  user,
  services,
};
