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
import { decodedToken } from "../../utils/jwt";
import { logOutUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
   baseUrl: "http://localhost:5000/api/v1",
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
   let result = baseQuery(arg, api, extraOptions);

   const currentToken = (api.getState() as RootState).auth.token;

   if (currentToken) {
      const decodeToken = decodedToken(currentToken);

      const currentDate: number = Math.floor(Date.now() / 1000);
      const expireDate = decodeToken?.exp as number;

      if (expireDate < currentDate) {
         api.dispatch(logOutUser());
         result = await baseQuery(arg, api, extraOptions);
      }
   }

   return result;
};

export const baseApi = createApi({
   reducerPath: "baseApi",
   baseQuery: baseQueryChecking,
   endpoints: () => ({}),
   tagTypes: ["users", "category", "subcategory", "courses"],
});

interface TServerErrorData {
   success: boolean;
   message: string;
   error: any;
   stack?: any;
}

interface TRtqQueryError {
   status: number;
   data: TServerErrorData;
}

export const isRtqQueryError = (error: any): error is TRtqQueryError => {
   return (
      typeof error === "object" &&
      error !== null && // Corrected null check
      typeof error.status === "number" &&
      typeof error.data === "object" &&
      typeof error.data.success === "boolean" &&
      typeof error.data.message === "string" &&
      "error" in error.data // Checking that 'error' key exists in data
   );
};
