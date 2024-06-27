/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_METHOD } from "../../constant/global";
import {
   TCreateCourse,
   TGetAllCourse,
   TGetSingleCourse,
   TUpdateCourse,
   TUpdateCourseStatus,
} from "../../types/course";
import { TRtqQueryResponse } from "../../types/redux";
import { baseApi } from "./baseApi";

const courseApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      createNewCourse: build.mutation({
         query: (data: TCreateCourse) => ({
            url: "/courses",
            method: API_METHOD.POST,
            body: data,
         }),
         invalidatesTags: ["courses"],
      }),
      updateCourse: build.mutation({
         query: ({ data, id }: { data: TUpdateCourse; id: string }) => ({
            url: `/courses/${id}`,
            method: API_METHOD.PUT,
            body: data,
         }),
         invalidatesTags: ["courses"],
      }),
      getAllCourse: build.query<TRtqQueryResponse<TGetAllCourse[]>, any>({
         query: () => ({
            url: "/courses",
            method: API_METHOD.GET,
         }),
         providesTags: ["courses"],
      }),
      getMyCourses: build.query<TRtqQueryResponse<TGetAllCourse[]>, any>({
         query: () => ({
            url: "/courses/my",
            method: API_METHOD.GET,
         }),
         providesTags: ["courses"],
      }),
      getSingleCourse: build.query<TRtqQueryResponse<TGetSingleCourse>, any>({
         query: ({ id }: { id: string }) => ({
            url: `/courses/${id}`,
            method: API_METHOD.GET,
         }),
         providesTags: ["courses"],
      }),
      updateCourseStatus: build.mutation({
         query: (data: TUpdateCourseStatus) => ({
            url: `/courses/status`,
            method: API_METHOD.PATCH,
            body: data,
         }),
         invalidatesTags: ["courses"],
      }),
      deleteCourse: build.mutation({
         query: ({ id }: { id: string }) => ({
            url: `/courses/${id}`,
            method: API_METHOD.DELETE,
         }),
         invalidatesTags: ["courses"],
      }),
   }),
});

export const {
   useCreateNewCourseMutation,
   useUpdateCourseMutation,
   useGetAllCourseQuery,
   useGetMyCoursesQuery,
   useGetSingleCourseQuery,
   useUpdateCourseStatusMutation,
   useDeleteCourseMutation,
} = courseApi;
