const express = require("express")
const app = express()
const connectDB = require("./db.js")
const dotenv = require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB()

app.use("/blog",require("./routers/blogRoutes"))
app.use("/users",require("./routers/userRoutes"))



app.listen(5000, ()=>console.log("listening to port 5000"))