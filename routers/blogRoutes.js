const express = require("express")

const router = express.Router();
const {getBlog} = require("../controller/blogFunctions.js")

// router.use((req, res) => {
//   console.log('Time: ', Date.now())  
// })

router.route("/id").get(getBlog)

module.exports = router;