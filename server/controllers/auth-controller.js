const User = require("../models/auth-model");

let bcrypt = require('bcryptjs');

const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

  //const saltRound = 10;
   //const hash_password = await bcrypt.hash(password, saltRound);
    
   // await User.create({ username, email, password: hash_password });

    const userCreated = await User.create({ username, email, phone, password });
    res.status(201).json({ msg: "Registration Successful",
     token: await userCreated.generateToken(),userId: userCreated._id.toString(), });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "invalid email address" });
    }

    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      const token = await userExist.generateToken(); // Generate token here
      res.status(200).json({
        message: "Login Successful",
        token: token, // Send token in the response
        userId: userExist._id.toString(),
       
      });
      console.log(token)
    } else {
      res.status(401).json({ message: "Invalid email or password" }); // Typo corrected
    }
  } catch (error) {
    console.error(error);
   // res.status(500).json({ message: "Internal server error" });
   next(error);
  }
};

// to send user data of login-data at mongodb
const user=async(req,res,)=>{
  try {
    const userData=req.user;
    console.log(userData);
    return res.status(200).json({userData})
  } catch (error) {
    console.log('error from the user route',error)
    
  }
}

module.exports = { home, register, login,user};



