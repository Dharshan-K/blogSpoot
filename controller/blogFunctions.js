const getBlog = async (req,res)=>{
	console.log("this is getBlog")
	console.log('Time: ', Date.now())  
	res.json({message:"this is your blog router"})
}

const getUserBlog = async(req,res)=>{
	console.log(req.params.user, req.params.id)
	res.status(200)
	res.json({
		user:req.params.user,
		id:req.params.ids
	})
}



module.exports = {getBlog,getUserBlog};