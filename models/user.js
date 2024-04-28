const mongoose = require("mongoose");

const userSchmea = new mongoose.Schema({
 firstName: {
   type: String,
   required: true,
 },
 lastName:{
   type: String,
 },
 email: {
   type: String,
   required: true,
   unique: true,
 },
 jobTitle: {
   type: String,
 },
 gender: {
   type: String,
 },
},{timestamps:true}   
);

const User = mongoose.model("user", userSchmea);

module.export = User; 