const getBlog = async (req,res)=>{
	console.log("this is getBlog")
	console.log('Time: ', Date.now())  
	res.json({message:"this is your blog router"})
}



module.exports = {getBlog};