const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const usermiddleware = async (req, res, next) => {
  // console.log(req.header("Authorization"));
  const token = req.header("Authorization");
  if (!token) {
    res.status(400).json({ msg: "no token found" });
  }

  const jwttoken = token.replace("Bearer", "").trim();

  try {
    const verifytoken = jwt.verify(jwttoken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: verifytoken.email }).select({
      password: 0,
    });

    req.user = userData;
    req.token = jwttoken;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { usermiddleware };
