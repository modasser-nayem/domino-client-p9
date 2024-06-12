/* eslint-disable @typescript-eslint/no-explicit-any */
import {
   BaseQueryApi,
   BaseQueryFn,
   DefinitionType,
   FetchArgs,
   createApi,
   fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
   baseUrl: "http://http://localhost/:5000/api/v1",
   prepareHeaders: (headers, { getState }) => {
      // get token in state
      const token = (getState() as RootState).auth.token;
      if (token) {
         headers.set("authorization", token);
      }
   },
});

const baseQueryChecking: BaseQueryFn<
   FetchArgs,
   BaseQueryApi,
   DefinitionType
> = async (arg, api, extraOptions): Promise<any> => {
   const result = baseQuery(arg, api, extraOptions);

   // write logic to check base api

   return result;
};

export const baseApi = createApi({
   reducerPath: "baseApi",
   baseQuery: baseQueryChecking,
   endpoints: () => ({}),
   tagTypes: [],
});

interface TServerErrorData {}

interface TRtqQueryError {
   status: number;
   data: TServerErrorData;
}

export const isRtqQueryError = (error: any): error is TRtqQueryError => {
   return (
      typeof error === "object" &&
      error === !null &&
      "status" in error &&
      "data" in error
   );
};
