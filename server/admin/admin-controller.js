const User = require("../models/user-model");
const { Contact } = require("../models/contact-form-model");

const getAllContacts = async (req, res) => {
  try {
    const allcontacts = await Contact.find();
    if (!allcontacts || allcontacts.length === 0) {
      res.status(400).json({ message: "no contacts found" });
    }
    return res.status(200).json(allcontacts);
  } catch (error) {
    res.status(400).json({ message: "no contacts found, server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allusers = await User.find().select({ password: 0 });
    if (!allusers || allusers.length === 0) {
      res.status(400).json({ message: "no user found" });
    }
    return res.status(200).json(allusers);
  } catch (error) {
    res.status(400).json({ message: "no user found, server error" });
  }
};

const deleteuserbyid = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "user not deleted" });
  }
};

const getuserbyid = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }).select({ password: 0 });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
    // next(error);
  }
};

const updateuserbyid = async (req, res) => {
  try {
    const id = req.params.id;
    const newdata = req.body;
    await User.updateOne({ _id: id }, { $set: newdata });
    res.status(200).json("user updated");
  } catch (error) {
    res.status(400).json(error);
    // next(error);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteuserbyid,
  getuserbyid,
  updateuserbyid,
  deleteContactById,
};
