const express = require("express")
const {getUser,loginUser,createUser} = require("../controller/user.js")
const {protect} = require("../middleware/user.authentication.js")
const router = express.Router();

router.get("/:user",getUser);
router.route("/createUser").post(createUser);
router.route("/login").post(loginUser)

module.exports = router

