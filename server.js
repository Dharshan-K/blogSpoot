const express = require("express")
const app = express()
const connectDB = require("./db.js")
const dotenv = require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB()

app.use("/blog",require("./routers/blogRoutes"))

app.get('/hi',(req,res)=>{
	console.log("hello world")
	res.status(201)
	res.json({message : "hello world", request: "hi"})	
})



app.listen(3000, ()=>console.log("liseting to port 3000"))