/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_METHOD } from "../../constant/global";
import {
   TAddCategory,
   TAddSubcategory,
   TGetAllCategory,
   TGetAllSubcategory,
   TUpdateCategory,
   TUpdateSubcategory,
} from "../../types/categories";
import { TRtqQueryResponse } from "../../types/redux";
import { baseApi } from "./baseApi";

const categoriesApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      addCategory: build.mutation({
         query: (data: TAddCategory) => ({
            url: "/category",
            method: API_METHOD.POST,
            body: data,
         }),
         invalidatesTags: ["category"],
      }),
      updateCategory: build.mutation({
         query: ({ data, id }: { data: TUpdateCategory; id: string }) => ({
            url: `/category/${id}`,
            method: API_METHOD.PUT,
            body: data,
         }),
         invalidatesTags: ["category"],
      }),
      getAllCategory: build.query<TRtqQueryResponse<TGetAllCategory>, any>({
         query: () => ({
            url: "/category",
            method: API_METHOD.GET,
         }),
         providesTags: ["category"],
      }),
      deleteCategory: build.mutation({
         query: ({ id }: { id: string }) => ({
            url: `/category/${id}`,
            method: API_METHOD.DELETE,
         }),
         invalidatesTags: ["category"],
      }),
      addSubcategory: build.mutation({
         query: (data: TAddSubcategory) => ({
            url: "/subcategory",
            method: API_METHOD.POST,
            body: data,
         }),
         invalidatesTags: ["subcategory"],
      }),
      updateSubcategory: build.mutation({
         query: ({ data, id }: { data: TUpdateSubcategory; id: string }) => ({
            url: `/subcategory/${id}`,
            method: API_METHOD.PUT,
            body: data,
         }),
         invalidatesTags: ["subcategory"],
      }),
      getAllSubcategory: build.query<
         TRtqQueryResponse<TGetAllSubcategory>,
         any
      >({
         query: () => ({
            url: "/subcategory",
            method: API_METHOD.GET,
         }),
         providesTags: ["subcategory"],
      }),
      deleteSubcategory: build.mutation({
         query: ({ id }: { id: string }) => ({
            url: `/subcategory/${id}`,
            method: API_METHOD.DELETE,
         }),
         invalidatesTags: ["subcategory"],
      }),
   }),
});

export const {
   useAddCategoryMutation,
   useUpdateCategoryMutation,
   useGetAllCategoryQuery,
   useDeleteCategoryMutation,
   useAddSubcategoryMutation,
   useUpdateSubcategoryMutation,
   useGetAllSubcategoryQuery,
   useDeleteSubcategoryMutation,
} = categoriesApi;
