import mongoose from "mongoose";

const userSchema=new  mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:[true,"Please enter your number"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please enter your password"]
    },
    confirmpassword:{
        type:String,
        required:true
    }

})
const User=mongoose.model("user",userSchema)
export default User;