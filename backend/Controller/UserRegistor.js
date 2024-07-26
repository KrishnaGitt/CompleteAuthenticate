import User from "../UserModel/User.js";
import { ApiError } from "../Util/ApiError.js";

export const registorUser=async(req,res)=>{
    const {firstName,lastName,age,email,phone,password,confirmpassword}=req.body;
    try {
        
        if([firstName,lastName,age,email,phone,password,confirmpassword].some((feild)=>{
            feild.trim()==""
        })){
            throw new ApiError(400,"Mandatory feild are missing")
        } 
        const createdUser=await User.create({
            firstName, lastName, age, email, phone, password, confirmpassword
        })
        console.log("createdUser-->",createdUser)
        res.status(201).json({
            createdUser
        })
    } catch (error) {
        console.log("error",error)
        res.status(500).json({
            message:"error->",Error:error.message
        })
    }
}