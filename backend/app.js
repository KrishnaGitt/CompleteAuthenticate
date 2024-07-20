
import express from "express";
import DataBaseConnection from "./DB/DataBaseConnection.js";
import user from "./Router/router.js"


const app=express();
app.use(express.json())

try {
    DataBaseConnection();
    app.use("/api/user",user)
    app.listen((5000),()=>{
        console.log("Server is Running on 5000 port");
    })
    
} catch (error) {
    console.log("not able to run the server:",error)
}