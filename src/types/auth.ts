export type TAuthUser = {
   id: string;
   role: string;
   iat: number;
   exp: number;
};

export type TAuthSlice = {
   user: TAuthUser | null;
   token: string | null;
};

export type TRegisterUser = {
   name: string;
   email: string;
   contactNo: string;
   password: string;
   confirmPassword: string;
};

export type TLoginUser = {
   email: string;
   password: string;
};

export type TChangePassword = {
   confirmPassword: string;
   currentPassword: string;
   newPassword: string;
};

export type TForgotPassword = {
   email: string;
};

export type TResetPassword = {
   newPassword: string;
   confirmPassword: string;
};
