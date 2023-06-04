/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db.js");
const path = require("path");
require("dotenv").config();

console.log("before cors");
app.use(cors());
console.log("after cors");
app.use(function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
});
console.log("after headers");
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
