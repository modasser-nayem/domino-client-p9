import { createSlice } from "@reduxjs/toolkit";
import { TAuthSlice } from "../../../types/auth";

const initialState: TAuthSlice = {
   user: null,
   token: null,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      logOutUser: (state) => {
         state.token = null;
         state.user = null;
      },
   },
});

export const { logOutUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
