const isadmin = async (req, res, next) => {
  try {
    const adminrole = req.user.isAdmin;
    if (!adminrole) {
      return res.status(403).json({ message: "user not an admin" });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { isadmin };
