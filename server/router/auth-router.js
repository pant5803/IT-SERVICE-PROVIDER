const express = require("express");
const router = express.Router();

const {
  home,
  about,
  register,
  login,
  contactformfunction,
  user,
  services,
} = require("../controllers/auth-controller");

const { getAllUsers, getAllContacts } = require("../admin/admin-controller");

const { usermiddleware } = require("../middlewares/user-middleware");

const { isadmin } = require("../admin/middlewares/isadmin");

const {
  deleteuserbyid,
  getuserbyid,
  updateuserbyid,
  deleteContactById,
} = require("../admin/admin-controller");

const { validate } = require("../middlewares/validate-signup");
const { signupschema } = require("../models/signupSchema");

router.route("/").get(home);

router.route("/about").get(about);

router.route("/register").post(validate(signupschema), register);

router.route("/login").post(login);

router.route("/contact").post(contactformfunction);

router.route("/user").get(usermiddleware, user);

router.route("/services").get(services);

router.route("/getallusers").get(usermiddleware, isadmin, getAllUsers);

router.route("/getallcontacts").get(usermiddleware, isadmin, getAllContacts);

router
  .route("/users/delete/:id")
  .delete(usermiddleware, isadmin, deleteuserbyid);

router.route("/users/getuser/:id").get(usermiddleware, isadmin, getuserbyid);

router
  .route("/users/update/:id")
  .patch(usermiddleware, isadmin, updateuserbyid);

router
  .route("/contacts/delete/:id")
  .delete(usermiddleware, isadmin, deleteContactById);

module.exports = router;
