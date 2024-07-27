import { configureStore,combineReducers } from "@reduxjs/toolkit";
import createUserSlice from "../Slice/LoginSlice";

const rootReducer=combineReducers({
    user:createUserSlice
})

export const store=configureStore({
    reducer:rootReducer
});