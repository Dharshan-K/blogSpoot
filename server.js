const express = require("express")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/blog",require("./routers/blogRoutes"))

app.get('/hi',(req,res)=>{
	console.log("hello world")
	res.status(201)
	res.json({message : "hello world", request: "hi"})	
})



app.listen(3000, ()=>console.log("liseting to port 3000"))