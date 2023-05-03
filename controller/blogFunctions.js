const User = require("../models/userModel.js")
const Blog = require("../models/blogModel.js")

let articleCount = 0;

//api Route: http://localhost:3000/blog/
//get all the blogs
//tested
const getAllBlog = async (req,res)=>{
	console.log("get all blog")
	const blog = await Blog.find();
	console.log("this is the blog",blog)
	res.status(400).json({message:"this are all your blog router"})
}

//api Route: http://localhost:3000/blog/Dharshan/12
//returns the blog of a user with ID
//tested
const getBlog = async (req,res)=>{
	const blog = await Blog.find({author: req.params.user, id:req.params.id});
	console.log(blog[0])
	res.status(200).json({title: blog[0].title,author: blog[0].author, content: blog[0].content})
}

//api Route: http://localhost:3000/blog/Dharshan
//query all the blogs of a particular user
//tested
const getUserBlog = async(req,res)=>{
	const blog = await Blog.find({author: req.params.user});
	console.log(blog)
	res.status(200).json({
		user:req.params.user,
		id:req.params.id
	})
}

//api route: http://localhost:3000/blog/Dharshan/posts
//post request to create the blog
//tested
const postBlog = async(req,res)=>{
	if(!req.body.title || !req.body.content || !req.body.author){
		res.status(200)
		res.json({message:"some fields are missing"})
		// throw new Error("some fields are missing")
	}else{
		const createBlog = await Blog.create({title: req.body.title, content: req.body.content, author: req.body.author, id:articleCount})
		articleCount+=1;
		res.status(200)
		res.json({message:"posted the blog"})
	}	
}

//api Route: http://localhost:3000/blog/Dharshan/12
//delete request to delete the blog
const deleteBlog = async(req,res)=>{
	const id = req.params.id;
	const blog = await Blog.findById({author: req.params.user})
	console.log(blog)
	res.status(200)
	if(!blog){
		res.status(401).json({message:"blog post not found"})
	}
	else{
		await blog.deleteOne({id:req.params.id});
		res.status(200).json({message:"blogpost succesfully removed"})
	}

}



module.exports = {getAllBlog,getBlog,getUserBlog,postBlog,deleteBlog};