import { createSlice } from "@reduxjs/toolkit";
import { TAuthSlice } from "../../../types/auth";

const initialState: TAuthSlice = {
   user: null,
   token: null,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {},
});

export const authReducer = authSlice.reducer;
