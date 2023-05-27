/** @format */

const express = require("express");

const router = express.Router();
const {
  getAllBlog,
  getBlog,
  getUserBlog,
  postBlog,
  deleteBlog,
} = require("../controller/blogFunctions.js");

router.route("/user/:id").get(getBlog).delete(deleteBlog);
router.route("/:user").get(getUserBlog);
router.route("/posts").post(postBlog);
router.route("/").get(getAllBlog);

module.exports = router;
