import User from "../UserModel/User.js";

export const registorUser=async(req,res)=>{
    const {firstName,lastName,age,email,phone,password,confirmpassword}=req.body;
    try {

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