/* eslint-disable @typescript-eslint/no-explicit-any */
type ResponseData<T> = {
   success?: boolean;
   message?: string;
   data?: T;
   error?: {
      success: boolean;
      message: string;
      errorDetails: any;
   };
};

export type TRtqQueryResponse<T> = ResponseData<T>;

export type TQueryParams = {
   name: string;
   value: React.Key | boolean;
};
