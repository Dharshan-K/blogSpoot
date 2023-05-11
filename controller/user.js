const bcrypt = require("bcryptjs")
const User = require("../models/userModel.js")
const jwt =require("jsonwebtoken")


const createUser = async(req,res)=>{
	const {name,email,password} = req.body;
	if(!name||!email||!password){
		res.status(401).json("fill all the credentials")
		throw new Error("fill all the credentials")
	}

	const userExists = await User.findOne({email})
	if(userExists){
		res.status(200).json("user already exists")
		throw new Error("User already exist")
	}

	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password,salt);
	const user = await User.create({userName: name, email: email, password:hashedPassword})
	console.log(generateToken(user._id));



	if(user){
		res.status(200).json({
			token: generateToken(user._id)
		})
	}else{
		res.status(401).json({message:"user not created"})
	}
}

const loginUser = async(req,res)=>{
const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user.id, user._id);

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }

  res.json({ message: "login user" });
}

const getUser = async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.json({ id: _id, name, email });
};

const generateToken = async(id)=>{
	return jwt.sign({ id }, process.env.JWT_TOKEN, { expiresIn: "30d" });
}


module.exports = {getUser,loginUser,createUser}