const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// run pre method 
userSchema.pre('save', async function(next){
  const user = this;  // this keyword returns the object of user 'x'

  if(!user.isModified("password")){
    // password neither created nor modified
    next();
  }

  // otherwise hash and store the password
  try{
    const salt = await bcryptjs.genSalt(10);
    const hash_pass = await bcryptjs.hash(user.password,salt);
    user.password = hash_pass;
  }
  catch(err){
    console.log("can not hash the password");
    next();
  }

})

// create a function to generate and return json web token. This json web token will be sent by the server as responce 
userSchema.methods.generateToken = async function(){
  try{
    return jwt.sign(
      // payload
      {
        userId : this._id.toString(),
        email : this.email,
        isAdmin : this.isAdmin,
      },
      // server signature : secret key
      process.env.JWT_SECRET_KEY,
      // expiring time
      {expiresIn:"30d"}
    )
  }catch(err){
    console.error(err);
  }
}

userSchema.methods.comparepassword = async function(password){
  return bcryptjs.compare(password,this.password);
}

// create model
const User = mongoose.model("User", userSchema);

module.exports = User;
