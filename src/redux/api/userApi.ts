/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_METHOD } from "../../constant/global";
import { TRtqQueryResponse } from "../../types/redux";
import {
   TGetAllUser,
   TGetMyProfile,
   TGetSingleUser,
   TUpdateProfile,
   TUpdateUserRole,
   TUpdateUserStatus,
} from "../../types/user";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getMyProfile: build.query<TRtqQueryResponse<TGetMyProfile>, any>({
         query: () => ({
            url: "/users/me",
            method: API_METHOD.GET,
         }),
      }),
      updateMyProfile: build.mutation({
         query: (data: TUpdateProfile) => ({
            url: "/users/me",
            method: API_METHOD.PUT,
            body: data,
         }),
         invalidatesTags: ["users"],
      }),
      getAllUsers: build.query<TRtqQueryResponse<TGetAllUser[]>, any>({
         query: () => ({
            url: "/users",
            method: API_METHOD.GET,
         }),
         providesTags: ["users"],
      }),
      getAllInstructors: build.query({
         query: () => ({
            url: "/users/instructors",
            method: API_METHOD.GET,
         }),
         providesTags: ["users"],
      }),
      getSingleUser: build.query<TRtqQueryResponse<TGetSingleUser>, any>({
         query: ({ id }: { id: string }) => ({
            url: `/users/${id}`,
            method: API_METHOD.GET,
         }),
      }),
      updateUserRole: build.mutation({
         query: (data: TUpdateUserRole) => ({
            url: "/users/role",
            method: API_METHOD.PATCH,
            body: data,
         }),
         invalidatesTags: ["users"],
      }),
      updateUserStatus: build.mutation({
         query: (data: TUpdateUserStatus) => ({
            url: "/users/status",
            method: API_METHOD.PATCH,
            body: data,
         }),
         invalidatesTags: ["users"],
      }),
   }),
});

export const {
   useGetMyProfileQuery,
   useUpdateMyProfileMutation,
   useGetAllUsersQuery,
   useGetAllInstructorsQuery,
   useGetSingleUserQuery,
   useUpdateUserRoleMutation,
   useUpdateUserStatusMutation,
} = userApi;
