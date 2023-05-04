const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
	title:{type:String, required:[true, "your blog must have a title"]},
	content: {type:String},
	author:{type:String},
	id:{type:String},
	
},{timestamps:true},)

module.exports = mongoose.model("blog",blogSchema)