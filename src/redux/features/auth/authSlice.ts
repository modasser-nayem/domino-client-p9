import { TAuthUser } from "./../../../types/auth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TAuthSlice } from "../../../types/auth";

const initialState: TAuthSlice = {
   user: null,
   token: null,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      logInUser: (
         state,
         action: PayloadAction<{ token: string; user: TAuthUser }>
      ) => {
         state.token = action.payload.token;
         state.user = action.payload.user;
      },
      logOutUser: (state) => {
         state.token = null;
         state.user = null;
      },
   },
});

export const { logOutUser, logInUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
