const User = require("../models/userModel.js")
const blog = require("../models/blogModel.js")

const getBlog = async (req,res)=>{
	console.log("this is getBlog") 
	res.json({message:"this is your blog router"})
}

const getUserBlog = async(req,res)=>{
	console.log(req.params.user, req.params.id)
	res.status(200)
	res.json({
		user:req.params.user,
		id:req.params.id
	})
}

const postBlog = async(req,res)=>{
	if(req.body.title || req.body.content || req.body.author){
		res.status(401)
		res.json({message:"some fields are missing"})
		throw new Error("some fields are missing")
	}

}



module.exports = {getBlog,getUserBlog,postBlog};