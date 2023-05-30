/** @format */

const express = require("express");

const router = express.Router();
const {
  getAllBlog,
  getBlog,
  getUserBlog,
  postBlog,
  deleteBlog,
  updatePost,
} = require("../controller/blogFunctions.js");

router.route("/user/:id").get(getBlog).delete(deleteBlog);
router.route("/:user").get(getUserBlog);
router.route("/posts").post(postBlog);
router.route("/").get(getAllBlog);
router.route("/update/:id").patch(updatePost);

module.exports = router;
