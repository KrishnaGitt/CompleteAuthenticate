import{createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

export const LoginSlice=createAsyncThunk("LoginSlice",async({firstName,lastName,age,email,phone,password,confirmpassword})=>{
    try {
        const response =await axios.post('/api/user/registor',{firstName,lastName,age,email,phone,password,confirmpassword});
        return response.data;
    } catch (error) {
        console.log("Error in redux",error)
        throw error;
    }
})
const createUserSlice=createSlice({
    name:"createUserSlice",
    initialState:{
        loggedUser:{},
        loading:false,
        error:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(LoginSlice.pending,(state,action)=>{
            state.loading=true;
            state.loggedUser={};
        })
        .addCase(LoginSlice.fulfilled,(state,action)=>{
            state.loading=false;
            state.loggedUser=[action.payload]
        })
        .addCase(LoginSlice.rejected,(state,action)=>{
            state.loading=false;
            state.error=true;
            state.loggedUser=[...action.payload];
        })
    }
})
export default createUserSlice.reducer;