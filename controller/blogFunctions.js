/** @format */

const User = require("../models/userModel.js");
const Blog = require("../models/blogModel.js");

//creates uniqueID for every entry in the database
function createUniqueId() {
  const timestamp = Date.now().toString(36); // convert timestamp to base-36 string
  const random = Math.random().toString(36).substr(2, 5); // generate 5 random alphanumeric characters
  const uniqueId = `${timestamp}-${random}`; // concatenate timestamp and random string
  return uniqueId;
}

//api Route: http://localhost:3000/blog/
//get all the blogs
//tested
const getAllBlog = async (req, res) => {
  console.log("get all blog");
  const blog = await Blog.find();
  res.status(200).send(blog);
};

//api Route: http://localhost:3000/blog/user/12
//returns the blog of a user with ID
//tested
const getBlog = async (req, res) => {
  const blog = await Blog.find({ id: req.params.id });
  console.log(req.params.id);
  console.log("getting the blog with ID");
  console.log(blog[0]);
  res.status(200).send(blog[0]);
};

//api Route: http://localhost:3000/blog/Dharshan
//query all the blogs of a particular user
//tested
const getUserBlog = async (req, res) => {
  console.log("getting user blog");
  console.log(req.params);
  const blog = await Blog.find({ author: req.params.user });
  console.log(blog);
  res.status(200).send(blog);
};

//api route: http://localhost:3000/blog/posts
//post request to create the blog
//tested
const postBlog = async (req, res) => {
  if (!req.body.title || !req.body.content || !req.body.author) {
    res.status(200);
    res.json({ message: "some fields are missing" });
    // throw new Error("some fields are missing")
  } else {
    const createBlog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      id: createUniqueId(),
    });
    res.status(200);
    res.json({ message: "posted the blog" });
  }
};

//api Route: http://localhost:3000/blog/Dharshan/12
//delete request to delete the blog
//tested
const deleteBlog = async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findOne({ id: req.params.id });
  console.log(blog);
  // res.status(200).json({message:"posts found"})
  if (!blog) {
    res.status(401).json({ message: "blog post not found" });
  } else {
    await blog.deleteOne();
    res.status(200).json({ message: "blogpost succesfully removed" });
  }
};

//api Route: http://localhost:3000/blog/Dharshan/12
//delete request to delete the blog
//tested
const updatePost = async (req, res) => {
  const data = req.body.data;
  console.log(data);
  await Blog.findOneAndUpdate({ id: data.id }, { content: data.content });
  res.status(200).json({ message: "successfully updated" });
};

module.exports = {
  getAllBlog,
  getBlog,
  getUserBlog,
  postBlog,
  deleteBlog,
  updatePost,
};
