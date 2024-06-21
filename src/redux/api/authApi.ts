import { API_METHOD } from "../../constant/global";
import {
   TChangePassword,
   TForgotPassword,
   TLoginUser,
   TRegisterUser,
   TResetPassword,
} from "../../types/auth";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      registerUser: build.mutation({
         query: (data: TRegisterUser) => ({
            url: "/auth/register",
            method: API_METHOD.POST,
            body: data,
         }),
         invalidatesTags: ["users"],
      }),
      loginUser: build.mutation({
         query: (data: TLoginUser) => ({
            url: "/auth/login",
            method: API_METHOD.POST,
            body: data,
         }),
      }),
      changePassword: build.mutation({
         query: (data: TChangePassword) => ({
            url: "/auth/change-password",
            method: API_METHOD.PUT,
            body: data,
         }),
      }),
      forgotPassword: build.mutation({
         query: (data: TForgotPassword) => ({
            url: "/auth/forgot-password",
            method: API_METHOD.POST,
            body: data,
         }),
      }),
      resetPassword: build.mutation({
         query: ({ data, token }: { data: TResetPassword; token: string }) => ({
            url: `/auth/reset-password?token=${token}`,
            method: API_METHOD.PUT,
            body: data,
         }),
      }),
   }),
});

export const {
   useRegisterUserMutation,
   useLoginUserMutation,
   useChangePasswordMutation,
   useForgotPasswordMutation,
   useResetPasswordMutation,
} = authApi;
