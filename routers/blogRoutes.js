const express = require("express")

const router = express.Router();
const {getBlog,getUserBlog} = require("../controller/blogFunctions.js")

router.route("/:user").get(getBlog)
router.route("/:user/:id").get(getUserBlog)

module.exports = router;