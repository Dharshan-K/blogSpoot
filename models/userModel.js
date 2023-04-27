const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
	userName: {type: string,required:[true, "please enter the name"]},
	password : {type:string, required:[true, "please enter the password"]},
	email:{type:string,required:[true, "please enter the email"]}
})

module.exports = mongoose.model("User", userSchema)