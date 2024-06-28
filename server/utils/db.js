// mongodb://127.0.0.1:27017/
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;
// mern is db name
// if db does not exist then it will create this db
// although db will not be displayed (neither in compass nor in shell) until unless there is a collection in it

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful");
  } catch (err) {
    console.log("connection failed due to error");
    process.exit(0);
  }
};

module.exports = connectdb;
