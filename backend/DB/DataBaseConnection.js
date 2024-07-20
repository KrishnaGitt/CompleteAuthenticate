import mongoose from "mongoose";

const DataBaseConnection=()=>{
    const url="mongodb://localhost:27017"
        mongoose.connect(url).then(()=>{
            console.log("data base is  connected")
        }).catch((eror)=>{
            console.log("Not able to connect DB due to:",error);
        })
    }
export default DataBaseConnection;
