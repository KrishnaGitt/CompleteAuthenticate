import express from "express"
const router=express.Router()
import {registorUser} from "../Controller/UserRegistor.js"

router.route("/registor").post(registorUser);



export default router;