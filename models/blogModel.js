const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
	title:{type:string, required:[true, "your blog must have a title"]},
	body: {type:string},
	author:{type:string},
	{timestamps:true},
})

module.exports = mongoose.model("blog",blogSchema)