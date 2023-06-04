/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db.js");
const path = require("path");
require("dotenv").config();

console.log("before cors");
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
console.log("after cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use("/blog", require("./routers/blogRoutes"));
app.use("/user", require("./routers/userRoutes"));

if (process.env.NODE_ENV === "production") {
  //*Set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build"))
  );
}

app.listen(5000, () => console.log("listening to port 5000"));
