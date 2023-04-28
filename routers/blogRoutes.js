const express = require("express")

const router = express.Router();
const {getBlog,getUserBlog,postBlog} = require("../controller/blogFunctions.js")

router.route("/:user").get(getBlog)
router.route(":user/posts").post(postBlog)
router.route("/:user/:id").get(getUserBlog)

module.exports = router;

