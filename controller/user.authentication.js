const bcrypt = require("bcryptjs")
const User = require("../models/userModel.js")

const createuser = async(req,res)=>{
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


	if(user){
		res.status(200).json({})
	}
}